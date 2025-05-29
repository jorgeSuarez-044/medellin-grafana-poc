import { Routes } from '@angular/router';
import { MenuOpcionesComponent } from './views/medellin-menu/medellin-menu.component';
import { InicioComponent } from './views/inicio/inicio.component';  // Asegúrate de que el componente esté correctamente importado
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

export const routes: Routes = [
  { path: '', component: MenuOpcionesComponent },  // Página principal con el menú
  { path: 'inicio', component: InicioComponent },  // Componente al que se navega cuando se hace clic en "Camiones"
  { path: 'ambiente/residuos/camiones/dashboard', component: CamionesComponent },   // Componente al que se navega cuando se hace clic en "Reportes"
  { path: 'ambiente/calidad/ruido/dashboard', component: SensoresRuidoComponent },       // Reemplaza con el componente correspondiente
  { path: 'reportes', component: ReportesMedicos },   // Reemplaza con el componente correspondiente
  { path: 'economico/digital/wifi/dashboard', component: PuntosWifi }, 
  { path: 'habitat/movilidad/vamosmed/dashboard', component: Vamosmed }, 
  { path: 'habitat/movilidad/dashboard', component: Movilidad }, 
  
  { path: 'gobernanza/participacion/pqrs/dashboard', component: Pqrsd }, 
  { path: 'whatsapp', component: WhatsApp }, 
  { path: 'calidad/turismo/dashboard', component: Turismo }, 
  { path: 'ambiente/calidad/siata/dashboard', component: Siata }, 
  { path: 'ambiente/residuos/camiones/mapa', component: MapasCamiones },
  { path: 'mapas/reportes', component: ReportesMedMap },  
   { 
    path: 'economico/digital/wifi/mapa', 
    component: WifiMaps,
    data: { ssr: false } // Esto desactiva SSR para esta ruta específica
  }, 
  { path: 'habitat/movilidad/vamosmed/mapa', component: VamosMedMap }, 
  { path: 'ambiente/calidad/ruido/mapa', component: NoiseSensorMapComponent }, 
  { path: 'calidad/turismo/map', component: TurismoMaps }, 
  { path: 'ambiente/calidad/siata/mapa', component: SiataMaps }, 

];
