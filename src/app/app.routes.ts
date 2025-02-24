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
import { SensoresMap } from './views/sensoresmap/sensoresmap.component';
import { TurismoMaps } from './views/turismomaps/turismomaps.component';
import { SiataMaps } from './views/siatamaps/siatamaps.component';

export const routes: Routes = [
  { path: '', component: MenuOpcionesComponent },  // Página principal con el menú
  { path: 'inicio', component: InicioComponent },  // Componente al que se navega cuando se hace clic en "Camiones"
  { path: 'camiones', component: CamionesComponent },   // Componente al que se navega cuando se hace clic en "Reportes"
  { path: 'sensores-ruido', component: SensoresRuidoComponent },       // Reemplaza con el componente correspondiente
  { path: 'reportes', component: ReportesMedicos },   // Reemplaza con el componente correspondiente
  { path: 'puntos-wifi', component: PuntosWifi }, 
  { path: 'vamosmed', component: Vamosmed }, 
  { path: 'pqrsd', component: Pqrsd }, 
  { path: 'whatsapp', component: WhatsApp }, 
  { path: 'turismo', component: Turismo }, 
  { path: 'siata', component: Siata }, 
  { path: 'mapas/camiones', component: MapasCamiones },
  { path: 'mapas/reportes', component: ReportesMedMap },  
  { path: 'mapas/puntos-wifi', component: WifiMaps },  
  { path: 'mapas/vamosmed', component: VamosMedMap }, 
  { path: 'mapas/sensores-ruido', component: SensoresMap }, 
  { path: 'mapas/turismo', component: TurismoMaps }, 
  { path: 'mapas/siata', component: SiataMaps }, 

];
