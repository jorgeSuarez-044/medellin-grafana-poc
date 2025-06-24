import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import maplibregl from 'maplibre-gl';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// Agrega estas propiedades

interface NoiseSensor {
  entity_id: string;
  fecha_ultimo_registro: string;
  laeq_slow: number;
  latitud: string;
  longitud: string;
}

interface HistoricData {
  fecha: string;
  laeq_slow: number;
}

@Component({
  selector: 'app-noise-sensor-map',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './sensoresmap.component.html',
  styleUrls: ['./sensoresmap.component.scss']
})
export class NoiseSensorMapComponent implements OnInit, AfterViewInit {
  @ViewChild('map') mapContainer!: ElementRef;
  private map: maplibregl.Map | null = null;
  private apiUrl = 'http://nepqas.medellin.gov.co/territoriointeligente/api/sensores-ruido';
  urlGrafanaBase = 'http://nepqas.medellin.gov.co/territoriointeligente/d/f36b2714-61d2-45cd-91ac-58b622840b4e/sensores-ruido-2025?orgId=1&kiosk';
urlGrafanaSegura: SafeResourceUrl;
  sensors: any[] = [];
  selectedSensor: string = '';
  selectedSensorDetails: any = null;
  historicData: HistoricData[] = [];
  historicAvg: number = 0;
  
  // Fechas
  desdeFecha: string = '';
  hastaFecha: string = '';
  
  // Estados de carga
  loading: boolean = true;
  isLoading: boolean = true;
  loadingHistoric: boolean = false;
  
  // Errores
  error: boolean = false;
  errorMessage: string = '';
  errorHistoric: string | null = null;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
     this.urlGrafanaSegura = this.inicializarUrlGrafana();
  }
private inicializarUrlGrafana(): SafeResourceUrl {
  return this.sanitizer.bypassSecurityTrustResourceUrl(this.urlGrafanaBase);
}

  ngOnInit(): void {
    this.loadSensors();
    this.setDefaultDates();
      this.actualizarUrlGrafana();
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = new maplibregl.Map({
      container: this.mapContainer.nativeElement,
      style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
      center: [-75.573, 6.244], // Coordenadas de Medellín
      zoom: 14
    });

    this.map.addControl(new maplibregl.NavigationControl());
    this.map.on('load', () => this.addSensorsToMap());
  }

  loadSensors(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.http.get<NoiseSensor[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.sensors = data.map(sensor => ({
          ...sensor,
          noiseLevel: this.getNoiseLevel(sensor.laeq_slow),
          levelName: this.translateLevel(this.getNoiseLevel(sensor.laeq_slow))
        }));
        this.isLoading = false;
        this.loadSensorData();
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar los sensores. Por favor intenta nuevamente.';
        this.isLoading = false;
        console.error('Error fetching sensors:', err);
      }
    });
  }
actualizarUrlGrafana() {
  let urlFinal = this.urlGrafanaBase;
  
  if (this.desdeFecha && this.hastaFecha) {
    const desdeTimestamp = new Date(this.desdeFecha).getTime();
    const hastaTimestamp = new Date(this.hastaFecha).getTime() + 86399999; // Para incluir todo el día
    
    urlFinal += `&from=${desdeTimestamp}&to=${hastaTimestamp}`;
  }

  this.urlGrafanaSegura = this.sanitizer.bypassSecurityTrustResourceUrl(urlFinal);
}
  loadSensorData(): void {
    this.loading = true;
    this.error = false;
    
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.sensors = data.map(sensor => ({
          ...sensor,
          noiseLevel: this.getNoiseLevel(sensor.laeq_slow),
          levelName: this.translateLevel(this.getNoiseLevel(sensor.laeq_slow))
        }));
        this.addSensorsToMap();
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading sensor data:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  setDefaultDates(): void {
    const today = new Date();
    const weekAgo = new Date();
    weekAgo.setDate(today.getDate() - 7);
    
    this.desdeFecha = this.formatDate(weekAgo);
    this.hastaFecha = this.formatDate(today);
  }

  formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  onSensorSelect(): void {
    if (!this.selectedSensor) return;
    
    const sensor = this.sensors.find(s => s.entity_id === this.selectedSensor);
    if (!sensor) return;
    
    this.selectedSensorDetails = {
      id: sensor.entity_id,
      laeq: sensor.laeq_slow,
      levelName: sensor.levelName,
      lastUpdate: sensor.fecha_ultimo_registro
    };
    
    if (this.map) {
      this.map.flyTo({
        center: [parseFloat(sensor.longitud), parseFloat(sensor.latitud)],
        zoom: 16
      });
    }
    
    this.historicData = [];
    this.historicAvg = 0;
  }

  getHistoricData(): void {
    if (!this.selectedSensor || !this.desdeFecha || !this.hastaFecha) {
      this.errorHistoric = 'Por favor selecciona un sensor y ambas fechas';
      return;
    }

    this.loadingHistoric = true;
    this.errorHistoric = null;

    const desde = `${this.desdeFecha} 00:00:00`;
    const hasta = `${this.hastaFecha} 23:59:59`;

    this.getHistoricoNoise(this.selectedSensor, desde, hasta).subscribe({
      next: (data) => {
        this.historicData = data;
        this.calculateHistoricAvg();
        this.updateMapWithHistoricalData();
        this.loadingHistoric = false;
      },
      error: (err) => {
        this.errorHistoric = 'Error al cargar datos históricos';
        this.loadingHistoric = false;
        console.error('Error fetching historic data:', err);
      }
    });
  }

  private calculateHistoricAvg(): void {
    if (this.historicData.length === 0) {
      this.historicAvg = 0;
      return;
    }
    
    const sum = this.historicData.reduce((acc, item) => acc + item.laeq_slow, 0);
    this.historicAvg = parseFloat((sum / this.historicData.length).toFixed(1)); // Aquí está la modificación para 1 decimal
  }

  private updateMapWithHistoricalData(): void {
    if (!this.map || !this.map.isStyleLoaded()) return;
    
    const sensorIndex = this.sensors.findIndex(s => s.entity_id === this.selectedSensor);
    if (sensorIndex === -1) return;
    
    // Actualizar el sensor con el promedio histórico
    this.sensors[sensorIndex] = {
      ...this.sensors[sensorIndex],
      laeq_slow: this.historicAvg,
      noiseLevel: this.getNoiseLevel(this.historicAvg),
      levelName: this.translateLevel(this.getNoiseLevel(this.historicAvg))
    };
    
    // Actualizar el mapa
    this.addSensorsToMap();
    
    // Actualizar los detalles del panel
    if (this.selectedSensorDetails) {
      this.selectedSensorDetails = {
        ...this.selectedSensorDetails,
        laeq: this.historicAvg,
        levelName: this.translateLevel(this.getNoiseLevel(this.historicAvg))
      };
    }
  }

  getHistoricoNoise(sensorId: string, desde: string, hasta: string): Observable<HistoricData[]> {
    const params = new HttpParams()
      .set('desde', desde)
      .set('hasta', hasta);

    const url = `${this.apiUrl}/${encodeURIComponent(sensorId)}/historico`;
    return this.http.get<HistoricData[]>(url, { params });
  }

  private addSensorsToMap(): void {
    if (!this.map || !this.map.isStyleLoaded()) return;

    if (this.map.getSource('sensors')) {
      this.map.removeLayer('sensors-circle');
      this.map.removeLayer('sensors-labels');
      this.map.removeSource('sensors');
    }

    this.map.addSource('sensors', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: this.sensors.map(sensor => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [parseFloat(sensor.longitud), parseFloat(sensor.latitud)]
          },
          properties: {
            id: sensor.entity_id,
            laeq: sensor.laeq_slow,
            level: sensor.noiseLevel,
            levelName: sensor.levelName,
            lastUpdate: sensor.fecha_ultimo_registro
          }
        }))
      }
    });

    this.map.addLayer({
      id: 'sensors-circle',
      type: 'circle',
      source: 'sensors',
      paint: {
        'circle-radius': [
          'case',
          ['==', ['get', 'id'], this.selectedSensor],
          12,
          8
        ],
        'circle-color': [
          'match',
          ['get', 'level'],
          'low', '#4CAF50',
          'moderate', '#FFC107',
          'high', '#F44336',
          '#9E9E9E'
        ],
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      }
    });

    this.map.addLayer({
      id: 'sensors-labels',
      type: 'symbol',
      source: 'sensors',
      layout: {
        'text-field': ['get', 'laeq'],
        'text-size': 12,
        'text-offset': [0, 1.5]
      },
      paint: {
        'text-color': '#000000',
        'text-halo-color': '#ffffff',
        'text-halo-width': 1
      }
    });

    this.map.on('click', 'sensors-circle', (e) => {
      const properties = e.features![0].properties;
      this.selectedSensor = properties['id'];
      this.selectedSensorDetails = {
        id: properties['id'],
        laeq: properties['laeq'],
        levelName: properties['levelName'],
        lastUpdate: properties['lastUpdate']
      };
      this.scrollToDetails();
    });

    this.map.on('mouseenter', 'sensors-circle', () => {
      if (this.map) this.map.getCanvas().style.cursor = 'pointer';
    });
    
    this.map.on('mouseleave', 'sensors-circle', () => {
      if (this.map) this.map.getCanvas().style.cursor = '';
    });
  }

  private getNoiseLevel(laeq: number): string {
    if (laeq < 55) return 'low';
    if (laeq <= 70) return 'moderate';
    return 'high';
  }

  private translateLevel(level: string): string {
    const levels: {[key: string]: string} = {
      'low': 'Bajo',
      'moderate': 'Moderado',
      'high': 'Alto'
    };
    return levels[level] || level;
  }

  getShortId(entityId: string): string {
    return entityId.split(':').pop() || entityId;
  }

  scrollToDetails(): void {
    const detailsElement = document.getElementById('sensor-details');
    if (detailsElement) {
      detailsElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  closeDetails(): void {
    this.selectedSensorDetails = null;
  }
}