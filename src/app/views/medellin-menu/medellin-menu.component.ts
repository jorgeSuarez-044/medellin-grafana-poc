import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface MenuOpcion {
  icono: string;
  texto: string;
  ruta?: string;
  hijos?: MenuOpcion[];
}

@Component({
  selector: 'app-menu-opciones',
  templateUrl: './medellin-menu.component.html',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  styleUrls: ['./medellin-menu.component.scss']
})
export class MenuOpcionesComponent {

  menu: MenuOpcion[] = [
    {
      icono: 'eco',
      texto: 'Ambiente',
      hijos: [
        { icono: 'recycling', texto: 'Gestión de Recursos', ruta: '/ambiente/recursos' },
        {
          icono: 'cloud',
          texto: 'Calidad Ambiental',
          hijos: [
            { icono: 'dashboard', texto: 'Tablero de Control Sensores Ruido', ruta: '/ambiente/calidad/ruido/dashboard' },
            { icono: 'map', texto: 'Mapa Sensores Ruido', ruta: '/ambiente/calidad/ruido/mapa' },
            { icono: 'dashboard_customize', texto: 'Tablero de Control SIATA', ruta: '/ambiente/calidad/siata/dashboard' },
            { icono: 'map', texto: 'Mapa SIATA', ruta: '/ambiente/calidad/siata/mapa' }
          ]
        },
        { icono: 'warning', texto: 'Gestión del Riesgo', ruta: '/ambiente/riesgo' },
        {
          icono: 'delete',
          texto: 'Gestión de Residuos',
          hijos: [
            { icono: 'dashboard', texto: 'Tablero de Control Camiones EMVARIAS', ruta: '/ambiente/residuos/camiones/dashboard' },
            { icono: 'map', texto: 'Mapa Camiones EMVARIAS', ruta: '/ambiente/residuos/camiones/mapa' }
          ]
        },
        { icono: 'public', texto: 'Cambio Climático', ruta: '/ambiente/cambioclimatico' }
      ]
    },
    {
      icono: 'home_work',
      texto: 'Hábitat',
      hijos: [
        { icono: 'domain', texto: 'Infraestructura', ruta: '/habitat/infraestructura' },
        {
          icono: 'commute',
          texto: 'Movilidad Inteligente',
          hijos: [
            { icono: 'dashboard', texto: 'Tablero de Control Movilidad', ruta: '/habitat/movilidad/dashboard' },
            { icono: 'map', texto: 'Mapa Movilidad', ruta: '/habitat/movilidad/mapa' },
            { icono: 'dashboard_customize', texto: 'Tablero de Control VamosMED', ruta: '/habitat/movilidad/vamosmed/dashboard' },
            { icono: 'map', texto: 'Mapa VamosMED', ruta: '/habitat/movilidad/vamosmed/mapa' }
          ]
        },
        { icono: 'build', texto: 'Servicios Públicos', ruta: '/habitat/servicios-publicos' }
      ]
    },
    {
      icono: 'trending_up',
      texto: 'Desarrollo Económico',
      hijos: [
        { icono: 'lightbulb', texto: 'Emprendimiento e Innovación', ruta: '/economico/emprendimiento' },
        { icono: 'school', texto: 'Economía del conocimiento', ruta: '/economico/conocimiento' },
        { icono: 'business', texto: 'Entorno Productivo y Competitivo', ruta: '/economico/entorno' },
        { icono: 'engineering', texto: 'Empleo', ruta: '/economico/empleo' },
        {
          icono: 'wifi',
          texto: 'Transformación Digital',
          hijos: [
            { icono: 'dashboard', texto: 'Tablero de Control Puntos WiFi', ruta: '/economico/digital/wifi/dashboard' },
            { icono: 'map', texto: 'Mapa Puntos WiFi', ruta: '/economico/digital/wifi/mapa' }
          ]
        },
        { icono: 'recycle', texto: 'Economía Circular', ruta: '/economico/circular' },
        { icono: 'agriculture', texto: 'Agricultura', ruta: '/economico/agricultura' }
      ]
    },
    {
      icono: 'groups',
      texto: 'Ciudadanía',
      hijos: [
        { icono: 'school', texto: 'Educación', ruta: '/ciudadania/educacion' },
        { icono: 'diversity_1', texto: 'Equidad', ruta: '/ciudadania/equidad' },
        { icono: 'accessible', texto: 'Sociedad Incluyente', ruta: '/ciudadania/incluyente' },
        { icono: 'emoji_people', texto: 'Cultura Ciudadana', ruta: '/ciudadania/cultura' },
        { icono: 'diversity_3', texto: 'Cohesión social', ruta: '/ciudadania/cohesion' }
      ]
    },
    {
      icono: 'health_and_safety',
      texto: 'Calidad de Vida',
      hijos: [
        { icono: 'sentiment_satisfied', texto: 'Bienestar', ruta: '/calidad/bienestar' },
        { icono: 'security', texto: 'Seguridad', ruta: '/calidad/seguridad' },
        { icono: 'healing', texto: 'Salud', ruta: '/calidad/salud' },
        {
          icono: 'map',
          texto: 'Ocio y Turismo',
          hijos: [
            { icono: 'dashboard', texto: 'Tablero de Control Turismo', ruta: '/calidad/turismo/dashboard' },
            { icono: 'map', texto: 'Mapa Turismo', ruta: '/calidad/turismo/mapa' }
          ]
        }
      ]
    },
    {
      icono: 'gavel',
      texto: 'Gobernanza',
      hijos: [
        {
          icono: 'how_to_vote',
          texto: 'Participación Ciudadana',
          hijos: [
            { icono: 'dashboard', texto: 'Tablero de Control ReportesMED', ruta: '/gobernanza/participacion/reportesmed/dashboard' },
            { icono: 'map', texto: 'Mapa Reportes MED', ruta: '/gobernanza/participacion/reportesmed/mapa' },
            { icono: 'dashboard_customize', texto: 'Tablero de Control PQRS', ruta: '/gobernanza/participacion/pqrs/dashboard' },
            { icono: 'map', texto: 'Mapa PQRS', ruta: '/gobernanza/participacion/pqrs/mapa' }
          ]
        },
        { icono: 'account_balance', texto: 'Gobernanza', ruta: '/gobernanza/gobernanza' },
        { icono: 'public', texto: 'Colaboración entre Ciudades y Territorios', ruta: '/gobernanza/colaboracion' },
        { icono: 'computer', texto: 'Gobierno Digital', ruta: '/gobernanza/digital' }
      ]
    }
  ];

  nivelesAbiertos: { [key: string]: boolean } = {};

  constructor(private router: Router) {}

  navegar(ruta: string | undefined) {
    if (ruta) {
      this.router.navigateByUrl(ruta);
    }
  }

  toggle(opcion: MenuOpcion) {
    const key = opcion.texto;
    this.nivelesAbiertos[key] = !this.nivelesAbiertos[key];
  }

  isAbierto(opcion: MenuOpcion): boolean {
    return this.nivelesAbiertos[opcion.texto];
  }
}
