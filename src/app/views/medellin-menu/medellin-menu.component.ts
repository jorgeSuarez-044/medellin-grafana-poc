import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-opciones',
  templateUrl: './medellin-menu.component.html',
  styleUrls: ['./medellin-menu.component.scss'],
  imports: [CommonModule, MatIconModule]
})
export class MenuOpcionesComponent {
  menuOpciones = [
    { texto: 'Inicio', icono: 'home', ruta: '/inicio' },
    {
      texto: 'Ambiente',
      icono: 'eco',
      expanded: false,
      subOpciones: [
        { texto: 'Gestión de Recursos', ruta: '/ambiente/gestion-recursos', icono: 'recycling' },
        {
          texto: 'Calidad Ambiental',
          icono: 'landscape',
          expanded: false,
          subOpciones: [
            { texto: 'Tablero de Control Sensores Ruido', ruta: '/ambiente/calidad-ambiental/sensores-ruido', icono: 'graphic_eq' },
            { texto: 'Mapa Sensores Ruido', ruta: '/ambiente/calidad-ambiental/mapa-ruido', icono: 'map' },
            { texto: 'Tablero de Control SIATA', ruta: '/ambiente/calidad-ambiental/tablero-siata', icono: 'analytics' },
            { texto: 'Mapa SIATA', ruta: '/ambiente/calidad-ambiental/mapa-siata', icono: 'place' }
          ]
        },
        { texto: 'Gestión del Riesgo', ruta: '/ambiente/gestion-riesgo', icono: 'warning' },
        {
          texto: 'Gestión de Residuos',
          icono: 'delete',
          expanded: false,
          subOpciones: [
            { texto: 'Tablero de Control Camiones EMVARIAS', ruta: '/ambiente/gestion-residuos/camiones', icono: 'local_shipping' },
            { texto: 'Mapa Camiones EMVARIAS', ruta: '/ambiente/gestion-residuos/mapa-camiones', icono: 'map' }
          ]
        },
        { texto: 'Cambio Climático', ruta: '/ambiente/cambio-climatico', icono: 'thermostat' }
      ]
    },
    {
      texto: 'Hábitat',
      icono: 'home_work',
      expanded: false,
      subOpciones: [
        { texto: 'Infraestructura', ruta: '/habitat/infraestructura', icono: 'apartment' },
        {
          texto: 'Movilidad Inteligente',
          icono: 'directions_car',
          expanded: false,
          subOpciones: [
            { texto: 'Tablero de Control Movilidad', ruta: '/movilidad-inteligente/tablero', icono: 'dashboard' },
            { texto: 'Mapa Movilidad', ruta: '/movilidad-inteligente/mapa', icono: 'map' },
            { texto: 'Tablero de Control VamosMED', ruta: '/movilidad-inteligente/vamosmed-tablero', icono: 'analytics' },
            { texto: 'Mapa VamosMED', ruta: '/movilidad-inteligente/vamosmed-mapa', icono: 'place' }
          ]
        },
        { texto: 'Servicios Públicos', ruta: '/habitat/servicios-publicos', icono: 'build' }
      ]
    },
    {
      texto: 'Desarrollo Económico',
      icono: 'business_center',
      expanded: false,
      subOpciones: [
        { texto: 'Emprendimiento e Innovación', ruta: '/desarrollo-economico/emprendimiento', icono: 'lightbulb' },
        { texto: 'Economía del conocimiento', ruta: '/desarrollo-economico/economia-conocimiento', icono: 'school' },
        { texto: 'Entorno Productivo y Competitivo', ruta: '/desarrollo-economico/entorno-productivo', icono: 'trending_up' },
        { texto: 'Empleo', ruta: '/desarrollo-economico/empleo', icono: 'work' },
        {
          texto: 'Transformación Digital',
          icono: 'devices',
          expanded: false,
          subOpciones: [
            { texto: 'Tablero de Control Puntos WiFi', ruta: '/desarrollo-economico/transformacion-digital/tablero', icono: 'dashboard' },
            { texto: 'Mapa Puntos WiFi', ruta: '/desarrollo-economico/transformacion-digital/mapa', icono: 'map' }
          ]
        },
        { texto: 'Economía Circular', ruta: '/desarrollo-economico/economia-circular', icono: 'recycling' },
        { texto: 'Agricultura', ruta: '/desarrollo-economico/agricultura', icono: 'agriculture' }
      ]
    },
    {
      texto: 'Ciudadanía',
      icono: 'people',
      expanded: false,
      subOpciones: [
        { texto: 'Educación', ruta: '/ciudadania/educacion', icono: 'school' },
        { texto: 'Equidad', ruta: '/ciudadania/equidad', icono: 'diversity_3' },
        { texto: 'Sociedad Incluyente', ruta: '/ciudadania/sociedad-incluyente', icono: 'group' },
        { texto: 'Cultura Ciudadana', ruta: '/ciudadania/cultura-ciudadana', icono: 'emoji_people' },
        { texto: 'Cohesión Social', ruta: '/ciudadania/cohesion-social', icono: 'handshake' }
      ]
    },
    {
      texto: 'Calidad de Vida',
      icono: 'favorite',
      expanded: false,
      subOpciones: [
        { texto: 'Bienestar', ruta: '/calidad-vida/bienestar', icono: 'spa' },
        { texto: 'Seguridad', ruta: '/calidad-vida/seguridad', icono: 'security' },
        { texto: 'Salud', ruta: '/calidad-vida/salud', icono: 'health_and_safety' },
        {
          texto: 'Ocio y Turismo',
          icono: 'beach_access',
          expanded: false,
          subOpciones: [
            { texto: 'Tablero de Control Turismo', ruta: '/calidad-vida/turismo-tablero', icono: 'dashboard' },
            { texto: 'Mapa Turismo', ruta: '/calidad-vida/turismo-mapa', icono: 'map' }
          ]
        }
      ]
    },
    {
      texto: 'Gobernanza',
      icono: 'gavel',
      expanded: false,
      subOpciones: [
        {
          texto: 'Participación Ciudadana',
          icono: 'people',
          expanded: false,
          subOpciones: [
            { texto: 'Tablero de Control ReportesMED', ruta: '/gobernanza/reportesmed-tablero', icono: 'dashboard' },
            { texto: 'Mapa Reportes MED', ruta: '/gobernanza/reportesmed-mapa', icono: 'map' },
            { texto: 'Tablero de Control PQRS', ruta: '/gobernanza/pqrs-tablero', icono: 'analytics' },
            { texto: 'Mapa PQRS', ruta: '/gobernanza/pqrs-mapa', icono: 'place' }
          ]
        },
        { texto: 'Colaboración entre Ciudades y Territorios', ruta: '/gobernanza/colaboracion-ciudades', icono: 'public' },
        { texto: 'Gobierno Digital', ruta: '/gobernanza/gobierno-digital', icono: 'computer' }
      ]
    }
  ];

  constructor(private router: Router) {}

  toggleSubMenu(opcion: any) {
    opcion.expanded = !opcion.expanded;
  }

  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }
}
