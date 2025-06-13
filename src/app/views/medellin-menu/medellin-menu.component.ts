import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

interface MenuOpcion {
  icono: string;
  texto: string;
  ruta?: string;
  hijos?: MenuOpcion[];
  dimension?: string;
  subdimension?: string;
  visible?: boolean;
}

interface PermisoUsuario {
  activa: boolean;
  dimension: string;
  subdimension: string;
}

@Component({
  selector: 'app-menu-opciones',
  templateUrl: './medellin-menu.component.html',
  standalone: true,
  imports: [CommonModule, MatIconModule, HttpClientModule],
  styleUrls: ['./medellin-menu.component.scss']
})
export class MenuOpcionesComponent implements OnInit {
  menu: MenuOpcion[] = [
    {
      icono: 'eco',
      texto: 'Ambiente',
      dimension: 'ambiente',
      hijos: [
        { 
          icono: 'recycling', 
          texto: 'Gestión de Recursos', 
          ruta: '/ambiente/recursos',
          subdimension: 'gestion_recursos'
        },
        {
          icono: 'cloud',
          texto: 'Calidad Ambiental',
          subdimension: 'calidad_ambiental',
          hijos: [
            { icono: 'dashboard', texto: 'Tablero de Control Sensores Ruido', ruta: '/ambiente/calidad/ruido/dashboard' },
            { icono: 'map', texto: 'Mapa Sensores Ruido', ruta: '/ambiente/calidad/ruido/mapa' },
            { icono: 'dashboard_customize', texto: 'Tablero de Control SIATA', ruta: '/ambiente/calidad/siata/dashboard' },
            { icono: 'map', texto: 'Mapa SIATA', ruta: '/ambiente/calidad/siata/mapa' }
          ]
        },
        { 
          icono: 'warning', 
          texto: 'Gestión del Riesgo', 
          ruta: '/ambiente/riesgo',
          subdimension: 'gestion_riesgo'
        },
        {
          icono: 'delete',
          texto: 'Gestión de Residuos',
          subdimension: 'gestion_residuos',
          hijos: [
            { icono: 'dashboard', texto: 'Tablero de Control Camiones EMVARIAS', ruta: '/ambiente/residuos/camiones/dashboard' },
            { icono: 'map', texto: 'Mapa Camiones EMVARIAS', ruta: '/ambiente/residuos/camiones/mapa' }
          ]
        },
        { 
          icono: 'public', 
          texto: 'Cambio Climático', 
          ruta: '/ambiente/cambioclimatico',
          subdimension: 'cambio_climatico'
        }
      ]
    },
    {
      icono: 'home_work',
      texto: 'Hábitat',
      dimension: 'habitat',
      hijos: [
        { 
          icono: 'domain', 
          texto: 'Infraestructura', 
          ruta: '/habitat/infraestructura',
          subdimension: 'infraestructura'
        },
        {
          icono: 'commute',
          texto: 'Movilidad Inteligente',
          subdimension: 'movilidad_inteligente',
          hijos: [
            { icono: 'dashboard', texto: 'Tablero de Control Movilidad', ruta: '/habitat/movilidad/dashboard' },
            { icono: 'map', texto: 'Mapa Movilidad', ruta: '/habitat/movilidad/mapa' },
            { icono: 'dashboard_customize', texto: 'Tablero de Control VamosMED', ruta: '/habitat/movilidad/vamosmed/dashboard' },
            { icono: 'map', texto: 'Mapa VamosMED', ruta: '/habitat/movilidad/vamosmed/mapa' }
          ]
        },
        { 
          icono: 'build', 
          texto: 'Servicios Públicos', 
          ruta: '/habitat/servicios-publicos',
          subdimension: 'servicios_publicos'
        }
      ]
    },
    {
      icono: 'trending_up',
      texto: 'Desarrollo Económico',
      dimension: 'desarrollo_economico',
      hijos: [
        { 
          icono: 'lightbulb', 
          texto: 'Emprendimiento e Innovación', 
          ruta: '/economico/emprendimiento',
          subdimension: 'emprendimiento_innovacion'
        },
        { 
          icono: 'school', 
          texto: 'Economía del conocimiento', 
          ruta: '/economico/conocimiento',
          subdimension: 'economia_conocimiento'
        },
        { 
          icono: 'business', 
          texto: 'Entorno Productivo y Competitivo', 
          ruta: '/economico/entorno',
          subdimension: 'entorno_productivo'
        },
        { 
          icono: 'engineering', 
          texto: 'Empleo', 
          ruta: '/economico/empleo',
          subdimension: 'empleo'
        },
        {
          icono: 'wifi',
          texto: 'Transformación Digital',
          subdimension: 'transformacion_digital',
          hijos: [
            { icono: 'dashboard', texto: 'Tablero de Control Puntos WiFi', ruta: '/economico/digital/wifi/dashboard' },
            { icono: 'map', texto: 'Mapa Puntos WiFi', ruta: '/economico/digital/wifi/mapa' }
          ]
        },
        { 
          icono: 'recycle', 
          texto: 'Economía Circular', 
          ruta: '/economico/circular',
          subdimension: 'economia_circular'
        },
        { 
          icono: 'agriculture', 
          texto: 'Agricultura', 
          ruta: '/economico/agricultura',
          subdimension: 'agricultura'
        }
      ]
    },
    {
      icono: 'groups',
      texto: 'Ciudadanía',
      dimension: 'ciudadania',
      hijos: [
        { 
          icono: 'school', 
          texto: 'Educación', 
          ruta: '/ciudadania/educacion',
          subdimension: 'educacion'
        },
        { 
          icono: 'diversity_1', 
          texto: 'Equidad', 
          ruta: '/ciudadania/equidad',
          subdimension: 'equidad'
        },
        { 
          icono: 'accessible', 
          texto: 'Sociedad Incluyente', 
          ruta: '/ciudadania/incluyente',
          subdimension: 'sociedad_incluyente'
        },
        { 
          icono: 'emoji_people', 
          texto: 'Cultura Ciudadana', 
          ruta: '/ciudadania/cultura',
          subdimension: 'cultura_ciudadana'
        },
        { 
          icono: 'diversity_3', 
          texto: 'Cohesión social', 
          ruta: '/ciudadania/cohesion',
          subdimension: 'cohesion_social'
        }
      ]
    },
    {
      icono: 'health_and_safety',
      texto: 'Calidad de Vida',
      dimension: 'calidad_vida',
      hijos: [
        { 
          icono: 'sentiment_satisfied', 
          texto: 'Bienestar', 
          ruta: '/calidad/bienestar',
          subdimension: 'bienestar'
        },
        { 
          icono: 'security', 
          texto: 'Seguridad', 
          ruta: '/calidad/seguridad',
          subdimension: 'seguridad'
        },
        { 
          icono: 'healing', 
          texto: 'Salud', 
          ruta: '/calidad/salud',
          subdimension: 'salud'
        },
        {
          icono: 'map',
          texto: 'Ocio y Turismo',
          subdimension: 'ocio_turismo',
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
      dimension: 'gobernanza',
      hijos: [
        {
          icono: 'how_to_vote',
          texto: 'Participación Ciudadana',
          subdimension: 'participacion_ciudadana',
          hijos: [
            { icono: 'dashboard', texto: 'Tablero de Control ReportesMED', ruta: '/gobernanza/participacion/reportesmed/dashboard' },
            { icono: 'map', texto: 'Mapa Reportes MED', ruta: '/gobernanza/participacion/reportesmed/mapa' },
            { icono: 'dashboard_customize', texto: 'Tablero de Control PQRS', ruta: '/gobernanza/participacion/pqrs/dashboard' },
            { icono: 'map', texto: 'Mapa PQRS', ruta: '/gobernanza/participacion/pqrs/mapa' }
          ]
        },
        { 
          icono: 'account_balance', 
          texto: 'Gobernanza', 
          ruta: '/gobernanza/gobernanza',
          subdimension: 'gobernanza'
        },
        { 
          icono: 'public', 
          texto: 'Colaboración entre Ciudades y Territorios', 
          ruta: '/gobernanza/colaboracion',
          subdimension: 'colaboracion_ciudades'
        },
        { 
          icono: 'computer', 
          texto: 'Gobierno Digital', 
          ruta: '/gobernanza/digital',
          subdimension: 'gobierno_digital'
        }
      ]
    }
  ];

  nivelesAbiertos: { [key: string]: boolean } = {};
  permisosUsuario: PermisoUsuario[] = [];
  cargando: boolean = true;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  async ngOnInit() {
    await this.obtenerPermisosUsuario();
    this.aplicarPermisos();
    this.cargando = false;
  }

async obtenerPermisosUsuario() {
    const token = localStorage.getItem('access_tokenadmin');
    if (!token) {
      console.warn('No se encontró el token de acceso - Mostrando menú completo');
      this.permisosUsuario = []; // Aseguramos que sea un array vacío
      return;
    }

    try {
      const url = 'https://flask-fiware.apps.servicios.medellin.gov.co/api/keycloak/userinfo';
      const response = await lastValueFrom(
        this.http.get<PermisoUsuario[]>(url, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
      );
      // Aseguramos que la respuesta sea un array
      this.permisosUsuario = Array.isArray(response) ? response : [];
    } catch (error) {
      console.error('Error al obtener permisos del usuario:', error);
      this.permisosUsuario = []; // Aseguramos que sea un array vacío
    }
  }

  aplicarPermisos() {
    // Aseguramos que permisosUsuario es un array
    if (!Array.isArray(this.permisosUsuario)) {
      this.permisosUsuario = [];
    }

    // Si no hay permisos (no hay token o error al obtenerlos), mostramos todo el menú
    if (this.permisosUsuario.length === 0) {
      this.menu.forEach(dimension => {
        dimension.visible = true;
        if (dimension.hijos) {
          dimension.hijos.forEach(hijo => {
            hijo.visible = true;
            if (hijo.hijos) {
              hijo.hijos.forEach(subhijo => {
                subhijo.visible = true;
              });
            }
          });
        }
      });
      return;
    }

    // Si hay permisos, aplicamos el filtrado normal
    this.menu.forEach(dimension => {
      const permisosDimension = this.permisosUsuario.filter(p => p.dimension === dimension.dimension);
      
      if (permisosDimension.length === 0) {
        dimension.visible = false;
        return;
      }

      dimension.visible = permisosDimension.some(p => p.activa);

      if (dimension.hijos) {
        dimension.hijos.forEach(hijo => {
          const permiso = this.permisosUsuario.find(p => 
            p.dimension === dimension.dimension && 
            p.subdimension === hijo.subdimension
          );
          
          hijo.visible = permiso ? permiso.activa : false;
          
          if (hijo.hijos) {
            hijo.hijos.forEach(subhijo => {
              subhijo.visible = hijo.visible;
            });
          }
        });
      }
    });
  }

 

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

  isVisible(opcion: MenuOpcion): boolean {
    return opcion.visible !== false;
  }
}