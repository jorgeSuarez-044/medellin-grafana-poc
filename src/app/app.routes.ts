import { Routes } from '@angular/router';

// Login sin layout
import { LoginComponent } from './views/login/login.component';

// Layout principal con header y menú
import { LayoutComponent } from './layout.component';

// Vistas
import { InicioComponent } from './views/inicio/inicio.component';
import { MenuOpcionesComponent } from './views/medellin-menu/medellin-menu.component';
import { CamionesComponent } from './views/camiones/camiones.component';
import { SensoresRuidoComponent } from './views/sensores-ruido/sensores-ruido.component';
import { ReportesMedicos } from './views/reportes-medicos/reportesmed.component';
import { PuntosWifi } from './views/puntos-wifi/puntoswifi.component';
import { Vamosmed } from './views/vamosmedellin/vamosmed.component';
import { Pqrsd } from './views/PQRSD/pqrsd.component';
import { WhatsApp } from './views/whatsap/whatsap.component';
import { Turismo } from './views/turismo/turismo.component';
import { Siata } from './views/siata/siata.component';
import { MapasCamiones } from './views/mapas-camiones/mapas-camiones.component';
import { ReportesMedMap } from './views/reportes-medmap/reportesmed-map.component';
import { WifiMaps } from './views/wifi-maps/wifi-maps.component';
import { VamosMedMap } from './views/vamosmedmap/vamosmed-map.component';
import { NoiseSensorMapComponent } from './views/sensoresmap/sensoresmap.component';
import { TurismoMaps } from './views/turismomaps/turismomaps.component';
import { SiataMaps } from './views/siatamaps/siatamaps.component';
import { Movilidad } from './views/movilidad-inteligente/movilidad-inteligente.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';

export const routes: Routes = [
  // 🔐 Rutas sin layout (login)
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  // 🌐 Rutas que usan layout con header y menú
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'menu', component: MenuOpcionesComponent },
      { path: 'ambiente/residuos/camiones/dashboard', component: CamionesComponent },
      { path: 'ambiente/calidad/ruido/dashboard', component: SensoresRuidoComponent },
      { path: 'reportes', component: ReportesMedicos },
      { path: 'economico/digital/wifi/dashboard', component: PuntosWifi },
      { path: 'habitat/movilidad/vamosmed/dashboard', component: Vamosmed },
      { path: 'habitat/movilidad/dashboard', component: Movilidad },
      { path: 'perfil/usuarios', component: UsuariosComponent },
      { path: 'gobernanza/participacion/pqrs/dashboard', component: Pqrsd },
      { path: 'whatsapp', component: WhatsApp },
      { path: 'calidad/turismo/dashboard', component: Turismo },
      { path: 'ambiente/calidad/siata/dashboard', component: Siata },
      { path: 'ambiente/residuos/camiones/mapa', component: MapasCamiones },
      { path: 'mapas/reportes', component: ReportesMedMap },
      { path: 'economico/digital/wifi/mapa', component: WifiMaps, data: { ssr: false } },
      { path: 'habitat/movilidad/vamosmed/mapa', component: VamosMedMap },
      { path: 'ambiente/calidad/ruido/mapa', component: NoiseSensorMapComponent },
      { path: 'calidad/turismo/map', component: TurismoMaps },
      { path: 'ambiente/calidad/siata/mapa', component: SiataMaps }
    ]
  },

  // 🔁 Ruta desconocida redirige al login
  { path: '**', redirectTo: 'login' }
];
