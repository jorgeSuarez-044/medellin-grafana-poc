import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as maplibregl from 'maplibre-gl';
import { FeatureCollection, Feature, Polygon } from 'geojson';

@Component({
  selector: 'app-wifi-maps',
  templateUrl: './wifi-maps.component.html',
  styleUrls: ['./wifi-maps.component.scss'],
  standalone: true,
  imports: []
})
export class WifiMaps implements OnInit, AfterViewInit, OnDestroy {
  private map: maplibregl.Map | null = null;
  private apiUrl =  'http://flask-fiware.apps.preprodalcaldia.medellin.gov.co/api/wifi-dane';
  
  // Datos para filtros
  comunas: any[] = [];
  gruposEtarios: any[] = [
    { id: 'jovenes', name: 'Jóvenes (0-30)' },
    { id: 'adultos', name: 'Adultos (30-60)' },
    { id: 'mayores', name: 'Adultos mayores (60+)' }
  ];
  
  nivelesEducativos: any[] = [
    { id: 'primaria', name: 'Primaria' },
    { id: 'secundaria', name: 'Secundaria' },
    { id: 'superior', name: 'Superior' }
  ];
  
  // Filtros seleccionados
  selectedComuna: string = '';
  selectedGrupoEtario: string = '';
  selectedNivelEducativo: string = '';
  showInternetAccess: boolean = true;
  showPopulationDensity: boolean = true;
  
  // Datos del mapa
  zonasWifi: any[] = [];
  manzanasData: any[] = [];
  correlacionData: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadInitialData();
  }

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }

  private loadInitialData(): void {
    // Cargar datos de zonas WiFi
    this.http.get(`${this.apiUrl}/zonas`).subscribe((data: any) => {
      this.zonasWifi = data;
      this.updateMapData();
    });

    // Cargar datos de correlación
    this.http.get(`${this.apiUrl}/correlacion`).subscribe((data: any) => {
      this.correlacionData = data;
      this.updateCorrelationLayer();
    });
  }

  private initializeMap(): void {
    this.map = new maplibregl.Map({
      container: 'map',
      style: 'https://demotiles.maplibre.org/style.json', // Estilo base
      center: [-75.5812, 6.2442], // Centro en Medellín
      zoom: 12
    });

    this.map.on('load', () => {
      this.addBaseLayers();
      this.setupInteractivity();
    });
  }

  private addBaseLayers(): void {
    if (!this.map) return;

    // Capa de manzanas (se actualizará con datos reales)
    this.map.addSource('manzanas', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: []
      }
    });

    this.map.addLayer({
      id: 'manzanas-layer',
      type: 'fill',
      source: 'manzanas',
      paint: {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', 'densidad'],
          0, '#f7fbff',
          500, '#c6dbef',
          1000, '#6baed6',
          2000, '#2171b5',
          4000, '#08306b'
        ],
        'fill-opacity': 0.7,
        'fill-outline-color': '#fff'
      }
    });

    // Capa de puntos WiFi
    this.map.addSource('wifi-points', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: []
      }
    });

    this.map.addLayer({
      id: 'wifi-points-layer',
      type: 'circle',
      source: 'wifi-points',
      paint: {
        'circle-radius': 5,
        'circle-color': '#00ff00',
        'circle-stroke-width': 1,
        'circle-stroke-color': '#fff'
      }
    });
  }

  private updateMapData(): void {
    if (!this.map || !this.zonasWifi.length) return;

    // Convertir datos de WiFi a GeoJSON
    const wifiFeatures = this.zonasWifi.map((zona: any) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [zona.longitud, zona.latitud]
      },
      properties: {
        name: zona.nombre,
        tipo: zona.tipo,
        velocidad: zona.velocidad
      }
    }));

    const wifiSource = this.map.getSource('wifi-points') as maplibregl.GeoJSONSource;
    wifiSource.setData({
      type: 'FeatureCollection',
      features: wifiFeatures
    });
  }

  private updateCorrelationLayer(): void {
    if (!this.map || !this.correlacionData.features) return;

    // Procesar datos de correlación para el mapa
    const correlationSource = this.map.getSource('manzanas') as maplibregl.GeoJSONSource;
    correlationSource.setData(this.correlacionData);
  }

  private setupInteractivity(): void {
    if (!this.map) return;

    // Tooltip para manzanas
    const popup = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false
    });

    this.map.on('mousemove', 'manzanas-layer', (e) => {
      if (!e.features?.length) return;

      const feature = e.features[0];
      const properties = feature.properties;

      // Calcular métricas
      const densidad = properties.tp27_perso / properties.area;
      const accesoInternet = (properties.tp19_inte1 / properties.tvivienda) * 100;
      const adultosMayores = (
        (properties.tp34_7_eda + properties.tp34_8_eda + properties.tp34_9_eda) / 
        properties.tp27_perso
      ) * 100;

      // Mostrar tooltip
      popup
        .setLngLat(e.lngLat)
        .setHTML(`
          <div class="map-tooltip">
            <h4>Manzana ${feature.id}</h4>
            <p><strong>Densidad poblacional:</strong> ${densidad.toFixed(2)} hab/m²</p>
            <p><strong>Acceso a internet:</strong> ${accesoInternet.toFixed(1)}%</p>
            <p><strong>Adultos mayores:</strong> ${adultosMayores.toFixed(1)}%</p>
            <p><strong>Nivel educativo predominante:</strong> ${this.getPredominantEducation(properties)}</p>
          </div>
        `)
        .addTo(this.map);
    });

    this.map.on('mouseleave', 'manzanas-layer', () => {
      popup.remove();
    });
  }

  private getPredominantEducation(properties: any): string {
    const primaria = properties.tp51primar / properties.tp27_perso;
    const secundaria = properties.tp51secund / properties.tp27_perso;
    const superior = properties.tp51superi / properties.tp27_perso;

    if (superior > secundaria && superior > primaria) return 'Superior';
    if (secundaria > primaria) return 'Secundaria';
    return 'Primaria';
  }

  // Métodos para manejar filtros
  applyFilters(): void {
    // Aquí implementarías la lógica para filtrar los datos según los filtros seleccionados
    // y actualizar las capas del mapa
    console.log('Aplicando filtros:', {
      comuna: this.selectedComuna,
      grupoEtario: this.selectedGrupoEtario,
      nivelEducativo: this.selectedNivelEducativo
    });

    // En una implementación real, harías una nueva solicitud al backend con los filtros
    // o filtrarías los datos ya cargados en el frontend
  }

  toggleLayer(layer: string, visible: boolean): void {
    if (!this.map) return;

    const visibility = visible ? 'visible' : 'none';
    
    if (layer === 'internet') {
      this.map.setLayoutProperty('wifi-points-layer', 'visibility', visibility);
    } else if (layer === 'population') {
      this.map.setLayoutProperty('manzanas-layer', 'visibility', visibility);
    }
  }
}