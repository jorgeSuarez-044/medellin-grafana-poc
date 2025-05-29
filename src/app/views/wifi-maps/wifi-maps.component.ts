import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as maplibregl from 'maplibre-gl';
import { MatIconModule } from '@angular/material/icon';


MatIconModule
@Component({
  selector: 'app-wifi-maps',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatSelectModule,
    MatSliderModule,
    MatIconModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './wifi-maps.component.html',
  styleUrls: ['./wifi-maps.component.scss']
})
export class WifiMaps implements OnInit, OnDestroy {
  private map!: maplibregl.Map ;
  private data: any[] = [];
  private popup: maplibregl.Popup | null = null;
  private selectedFeature: any = null;
  isLoading = true;
  error = false;
  
  // Filtros
  selectedComuna = '';
  selectedAgeGroup = '';
  selectedEducationLevel = '';
  internetAccessFilter = 'all';
  zoomLevel = 12;
  
  // Opciones de filtros
  comunas: string[] = [];
  ageGroups = [
    { value: '0-14', label: '0-14 años' },
    { value: '15-59', label: '15-59 años' },
    { value: '60+', label: '60+ años' }
  ];
  
  educationLevels = [
    { value: 'primary', label: 'Primaria' },
    { value: 'secondary', label: 'Secundaria' },
    { value: 'higher', label: 'Superior' }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

ngOnDestroy(): void {
  if (this.map) {
    this.map.remove();
  }
  if (this.popup) {
    this.popup.remove();
  }
  this.selectedFeature = null;
}


  // Propiedades calculadas
  get filteredData(): any[] {
    let filtered = this.data;
    
    if (this.selectedComuna) {
      filtered = filtered.filter(item => item.nmb_lc_cm === this.selectedComuna);
    }
    
    if (this.internetAccessFilter === 'high') {
      filtered = filtered.filter(item => (item.tp19_inte1 / (item.tvivienda || 1)) > 0.7);
    } else if (this.internetAccessFilter === 'low') {
      filtered = filtered.filter(item => (item.tp19_inte1 / (item.tvivienda || 1)) <= 0.3);
    }
    
    return filtered;
  }

  get totalPopulation(): number {
    return this.filteredData.reduce((sum, item) => sum + (item.tp27_perso || 0), 0);
  }

  get totalHomes(): number {
    return this.filteredData.reduce((sum, item) => sum + (item.tvivienda || 0), 0);
  }

  get internetAccessPercentage(): number {
    const totalInternet = this.filteredData.reduce((sum, item) => sum + (item.tp19_inte1 || 0), 0);
    const totalHomes = this.totalHomes || 1;
    return (totalInternet / totalHomes) * 100;
  }

  get waterAccessPercentage(): number {
    const totalWater = this.filteredData.reduce((sum, item) => sum + (item.tp19_acu_1 || 0), 0);
    const totalHomes = this.totalHomes || 1;
    return (totalWater / totalHomes) * 100;
  }

  get gasAccessPercentage(): number {
    const totalGas = this.filteredData.reduce((sum, item) => sum + (item.tp19_gas_1 || 0), 0);
    const totalHomes = this.totalHomes || 1;
    return (totalGas / totalHomes) * 100;
  }

  get ageDistribution(): any {
    const distribution = {
      '0-14': 0,
      '15-59': 0,
      '60+': 0
    };
    
    this.filteredData.forEach(item => {
      distribution['0-14'] += (item.tp34_1_eda || 0) + (item.tp34_2_eda || 0) + (item.tp34_3_eda || 0);
      distribution['15-59'] += (item.tp34_4_eda || 0) + (item.tp34_5_eda || 0) + (item.tp34_6_eda || 0);
      distribution['60+'] += (item.tp34_7_eda || 0) + (item.tp34_8_eda || 0) + (item.tp34_9_eda || 0);
    });
    
    const total = distribution['0-14'] + distribution['15-59'] + distribution['60+'] || 1;
    
    return {
      '0-14': (distribution['0-14'] / total) * 100,
      '15-59': (distribution['15-59'] / total) * 100,
      '60+': (distribution['60+'] / total) * 100
    };
  }

  get educationDistribution(): any {
    const distribution = {
      'primary': 0,
      'secondary': 0,
      'higher': 0,
      'other': 0
    };
    
    this.filteredData.forEach(item => {
      distribution['primary'] += item.tp51primar || 0;
      distribution['secondary'] += item.tp51secund || 0;
      distribution['higher'] += item.tp51superi || 0;
      distribution['other'] += item.tp51_99_ed || 0;
    });
    
    const total = distribution['primary'] + distribution['secondary'] + distribution['higher'] + distribution['other'] || 1;
    
    return {
      'primary': (distribution['primary'] / total) * 100,
      'secondary': (distribution['secondary'] / total) * 100,
      'higher': (distribution['higher'] / total) * 100,
      'other': (distribution['other'] / total) * 100
    };
  }

   fetchData(): void {
    this.isLoading = true;
    this.error = false;
    
    this.http.get<any[]>('http://flask-fiware.apps.preprodalcaldia.medellin.gov.co/api/wifi-dane/all')
      .subscribe({
        next: (data) => {
          this.data = data;
          this.processData();
          this.initMap();
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching data:', err);
          this.error = true;
          this.isLoading = false;
        }
      });
  }

  private processData(): void {
    const comunaSet = new Set<string>();
    this.data.forEach(item => comunaSet.add(item.nmb_lc_cm));
    this.comunas = Array.from(comunaSet).sort();
  }

  private initMap(): void {
    this.map = new maplibregl.Map({
      container: 'map',
      style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
      center: [-75.5454, 6.2512],
      zoom: this.zoomLevel
    });

    this.map.on('load', () => {
      this.addDataToMap();
    });

    this.map.on('zoomend', () => {
      this.zoomLevel = this.map.getZoom();
      this.updateMapLayers();
    });
  }

 private addDataToMap(): void {
  const geoJsonData: any = {
    type: 'FeatureCollection',
    features: this.data.map((item, index) => ({
      type: 'Feature',
      id: index, // Añadimos un ID único para cada feature
      geometry: {
        type: 'Point',
        coordinates: [item.longitud, item.latitud]
      },
      properties: {
        ...item,
        populationDensity: (item.tp27_perso || 0) / (item.area || 1),
        internetAccess: ((item.tp19_inte1 || 0) / (item.tvivienda || 1)) * 100,
        waterAccess: ((item.tp19_acu_1 || 0) / (item.tvivienda || 1)) * 100,
        gasAccess: ((item.tp19_gas_1 || 0) / (item.tvivienda || 1)) * 100,
        educationPrimary: ((item.tp51primar || 0) / (item.tp27_perso || 1)) * 100,
        educationSecondary: ((item.tp51secund || 0) / (item.tp27_perso || 1)) * 100,
        educationHigher: ((item.tp51superi || 0) / (item.tp27_perso || 1)) * 100,
        elderlyPercentage: ((item.tp34_7_eda + item.tp34_8_eda + item.tp34_9_eda || 0) / (item.tp27_perso || 1)) * 100
      }
    }))
  };

  this.map.addSource('wifi-data', {
    type: 'geojson',
    data: geoJsonData,
    generateId: true // Generar IDs únicos si no los hay
  });

  this.map.addLayer({
    id: 'wifi-points',
    type: 'circle',
    source: 'wifi-data',
    paint: {
      'circle-radius': [
        'interpolate', ['linear'], ['zoom'],
        10, 6, // Más grande en zoom inicial
        15, 12 // Más grande en zoom cercano
      ],
      'circle-color': [
        'case',
        ['boolean', ['feature-state', 'selected'], false],
        '#ff00ff', // Color cuando está seleccionado
        ['interpolate', ['linear'], ['get', 'internetAccess'], 
        0, '#ff0000', 
        50, '#ffff00', 
        100, '#00ff00']
      ],
      'circle-opacity': 0.9,
      'circle-stroke-width': [
        'case',
        ['boolean', ['feature-state', 'selected'], false],
        3, // Borde más grueso cuando está seleccionado
        1
      ],
      'circle-stroke-color': '#ffffff'
    }
  });

  // Evento para mostrar popup al hacer clic
  this.map.on('click', 'wifi-points', (e) => {
    if (e.features && e.features.length > 0) {
      this.showPopup(e.features[0]);
    }
  });

  // Cerrar popup al hacer clic en cualquier parte del mapa
  this.map.on('click', (e) => {
    const features = this.map.queryRenderedFeatures(e.point, {
      layers: ['wifi-points']
    });
    
    if (features.length === 0 && this.popup) {
      this.clearSelectedFeature();
      this.popup.remove();
      this.popup = null;
    }
  });

  // Cambiar el cursor al pasar sobre los puntos
  this.map.on('mouseenter', 'wifi-points', () => {
    this.map.getCanvas().style.cursor = 'pointer';
  });

  this.map.on('mouseleave', 'wifi-points', () => {
    this.map.getCanvas().style.cursor = '';
  });
}
private clearSelectedFeature(): void {
  if (this.selectedFeature) {
    // Verificar si la capa existe antes de intentar cambiar el estado
    if (this.map.getLayer('wifi-points')) {
      this.map.setFeatureState(
        { source: 'wifi-data', id: this.selectedFeature.id },
        { selected: false }
      );
    }
    this.selectedFeature = null;
  }
}

private showPopup(feature: any): void {
  // Limpiar feature seleccionado anterior
  this.clearSelectedFeature();

  // Verificar que el feature tenga geometría válida
  if (!feature.geometry || !feature.geometry.coordinates) {
    console.error('Feature geometry is invalid:', feature);
    return;
  }

  // Establecer el nuevo feature como seleccionado
  this.selectedFeature = feature;
  this.map.setFeatureState(
    { source: 'wifi-data', id: feature.id },
    { selected: true }
  );

  // Cerrar popup existente
  if (this.popup) {
    this.popup.remove();
  }

  const properties = feature.properties || {};
  const coordinates = feature.geometry.coordinates.slice();

  // Eliminar la verificación del while que usaba 'e' ya que no es necesaria
  // para puntos individuales (solo útil cuando se trabajan con líneas/polígonos que cruzan el antimeridiano)

  // Crear contenido del popup con manejo de valores nulos
  const content = `
    <div class="map-popup">
      <h4>Manzana ${properties.cod_dane_a || 'N/A'}</h4>
      <p><strong>Comuna:</strong> ${properties.nmb_lc_cm || 'N/A'}</p>
      <p><strong>Población:</strong> ${properties.tp27_perso || '0'}</p>
      <p><strong>Densidad:</strong> ${(properties.populationDensity || 0).toFixed(2)} pers/m²</p>
      <p><strong>Acceso a internet:</strong> ${(properties.internetAccess || 0).toFixed(1)}%</p>
      <p><strong>Acceso a agua:</strong> ${(properties.waterAccess || 0).toFixed(1)}%</p>
      <p><strong>Acceso a gas:</strong> ${(properties.gasAccess || 0).toFixed(1)}%</p>
      <p><strong>Adultos mayores (60+):</strong> ${(properties.elderlyPercentage || 0).toFixed(1)}%</p>
      <strong>Educación:</strong><br>
      - Primaria: ${(properties.educationPrimary || 0).toFixed(1)}%<br>
      - Secundaria: ${(properties.educationSecondary || 0).toFixed(1)}%<br>
      - Superior: ${(properties.educationHigher || 0).toFixed(1)}%
    </div>
  `;

  // Crear y mostrar el nuevo popup
  this.popup = new maplibregl.Popup({
    closeButton: true,
    closeOnClick: false,
    anchor: 'bottom',
    offset: 25
  })
    .setLngLat(coordinates)
    .setHTML(content)
    .addTo(this.map);

  // Cerrar popup cuando se hace clic en el botón de cerrar
  this.popup.on('close', () => {
    this.clearSelectedFeature();
    this.popup = null;
  });
}

  private updateMapLayers(): void {
    if (!this.map.getLayer('wifi-points')) return;

    let colorExpression: any[] = ['interpolate', ['linear'], ['get', 'internetAccess'], 0, '#ff0000', 50, '#ffff00', 100, '#00ff00'];
    
    if (this.selectedAgeGroup === '0-14') {
      colorExpression = ['interpolate', ['linear'], 
        ['/', ['+', ['get', 'tp34_1_eda'], ['get', 'tp34_2_eda'], ['get', 'tp34_3_eda']], ['get', 'tp27_perso']], 
        0, '#ffebee', 0.5, '#ffcdd2', 1, '#ef9a9a'];
    } else if (this.selectedAgeGroup === '15-59') {
      colorExpression = ['interpolate', ['linear'], 
        ['/', ['+', ['get', 'tp34_4_eda'], ['get', 'tp34_5_eda'], ['get', 'tp34_6_eda']], ['get', 'tp27_perso']], 
        0, '#e8f5e9', 0.5, '#c8e6c9', 1, '#a5d6a7'];
    } else if (this.selectedAgeGroup === '60+') {
      colorExpression = ['interpolate', ['linear'], 
        ['/', ['+', ['get', 'tp34_7_eda'], ['get', 'tp34_8_eda'], ['get', 'tp34_9_eda']], ['get', 'tp27_perso']], 
        0, '#e3f2fd', 0.5, '#bbdefb', 1, '#90caf9'];
    } else if (this.selectedEducationLevel === 'primary') {
      colorExpression = ['interpolate', ['linear'], ['get', 'educationPrimary'], 0, '#fff3e0', 50, '#ffe0b2', 100, '#ffcc80'];
    } else if (this.selectedEducationLevel === 'secondary') {
      colorExpression = ['interpolate', ['linear'], ['get', 'educationSecondary'], 0, '#f3e5f5', 50, '#e1bee7', 100, '#ce93d8'];
    } else if (this.selectedEducationLevel === 'higher') {
      colorExpression = ['interpolate', ['linear'], ['get', 'educationHigher'], 0, '#e0f7fa', 50, '#b2ebf2', 100, '#80deea'];
    }

    this.map.setPaintProperty('wifi-points', 'circle-color', colorExpression);
    
    if (this.selectedComuna) {
      this.map.setFilter('wifi-points', ['==', ['get', 'nmb_lc_cm'], this.selectedComuna]);
    } else {
      this.map.setFilter('wifi-points', null);
    }
    
    this.map.setPaintProperty('wifi-points', 'circle-radius', [
      'interpolate',
      ['linear'],
      ['zoom'],
      10, 3,
      15, 8
    ]);
  }

  applyFilters(): void {
    this.updateMapLayers();
  }

  resetFilters(): void {
    this.selectedComuna = '';
    this.selectedAgeGroup = '';
    this.selectedEducationLevel = '';
    this.internetAccessFilter = 'all';
    this.applyFilters();
  }

  getAgeColor(ageGroup: string): string {
    switch(ageGroup) {
      case '0-14': return '#ef9a9a';
      case '15-59': return '#a5d6a7';
      case '60+': return '#90caf9';
      default: return '#bdbdbd';
    }
  }
}