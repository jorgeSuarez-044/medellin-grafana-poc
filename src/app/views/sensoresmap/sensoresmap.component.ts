import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import maplibregl from 'maplibre-gl';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-noise-sensor-map',
    standalone: true, // Si estás usando componentes standalone
  imports: [
    CommonModule,
    MatIconModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  templateUrl: './sensoresmap.component.html',
  styleUrls: ['./sensoresmap.component.scss']
})
export class NoiseSensorMapComponent implements OnInit, AfterViewInit {
  @ViewChild('map') mapContainer!: ElementRef;
  private map: maplibregl.Map | null = null;
  private apiUrl = 'http://flask-fiware.apps.preprodalcaldia.medellin.gov.co/api/sensores-ruido';
  sensors: any[] = [];
  loading = true;
  error = false;
  selectedSensor: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadSensorData();
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = new maplibregl.Map({
      container: this.mapContainer.nativeElement,
      style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
      center: [-75.573, 6.244], // [longitud, latitud] - Medellín
      zoom: 14
    });

    this.map.addControl(new maplibregl.NavigationControl());

    this.map.on('load', () => {
      this.addSensorsToMap();
    });
  }

   loadSensorData(): void {
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
        'circle-radius': 8,
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
      this.selectedSensor = e.features![0].properties;
      
      // Muestra detalles en el panel lateral en lugar de diálogo
      this.scrollToDetails();
    });

    this.map.on('mouseenter', 'sensors-circle', () => {
      this.map!.getCanvas().style.cursor = 'pointer';
    });
    this.map.on('mouseleave', 'sensors-circle', () => {
      this.map!.getCanvas().style.cursor = '';
    });
  }

  private getNoiseLevel(laeq: number): string {
    if (laeq < 55) return 'low';
    if (laeq <= 70) return 'moderate';
    return 'high';
  }

  private translateLevel(level: string): string {
    return {
      'low': 'Bajo',
      'moderate': 'Moderado',
      'high': 'Alto'
    }[level] || level;
  }
  

  private scrollToDetails(): void {
    const detailsElement = document.getElementById('sensor-details');
    if (detailsElement) {
      detailsElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  closeDetails(): void {
    this.selectedSensor = null;
  }
}