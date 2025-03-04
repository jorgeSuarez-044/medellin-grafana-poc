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
  { path: 'territoriointeligente/visualizador/camiones', component: CamionesComponent },   // Componente al que se navega cuando se hace clic en "Reportes"
  { path: 'territoriointeligente/visualizador/sensores-ruido', component: SensoresRuidoComponent },       // Reemplaza con el componente correspondiente
  { path: 'territoriointeligente/visualizador/reportes', component: ReportesMedicos },   // Reemplaza con el componente correspondiente
  { path: 'territoriointeligente/visualizador/puntos-wifi', component: PuntosWifi }, 
  { path: 'territoriointeligente/visualizador/vamosmed', component: Vamosmed }, 
  { path: 'territoriointeligente/visualizador/pqrsd', component: Pqrsd }, 
  { path: 'territoriointeligente/visualizador/whatsapp', component: WhatsApp }, 
  { path: 'territoriointeligente/visualizador/turismo', component: Turismo }, 
  { path: 'territoriointeligente/visualizador/siata', component: Siata }, 
  { path: 'territoriointeligente/visualizador/mapas/camiones', component: MapasCamiones },
  { path: 'territoriointeligente/visualizador/mapas/reportes', component: ReportesMedMap },  
  { path: 'territoriointeligente/visualizador/mapas/puntos-wifi', component: WifiMaps },  
  { path: 'territoriointeligente/visualizador/mapas/vamosmed', component: VamosMedMap }, 
  { path: 'territoriointeligente/visualizador/mapas/sensores-ruido', component: SensoresMap }, 
  { path: 'territoriointeligente/visualizador/mapas/turismo', component: TurismoMaps }, 
  { path: 'territoriointeligente/visualizador/mapas/siata', component: SiataMaps }, 

];