import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface Opcion {
  icono: string;
  texto: string;
  ruta?: string;
}

@Component({
  selector: 'app-menu-opciones',
  templateUrl: './medellin-menu.component.html',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  styleUrls: ['./medellin-menu.component.scss']
})
export class MenuOpcionesComponent {
  // Opciones generales que se mostrarán en el menú
  opciones: Opcion[] = [
    { icono: 'home', texto: 'inicio', ruta: '/inicio' }
  ];

  // Opciones que aparecerán bajo "Mapas"
  opcionesMapas: Opcion[] = [
    { icono: 'directions_car', texto: 'Camiones EMVARIAS', ruta: '/territoriointeligente/visualizador/mapas/camiones' },
    { icono: 'description', texto: 'ReportesMed', ruta: '/mapas/reportes' },
    { icono: 'wifi', texto: 'Puntos Wi-Fi', ruta: '/territoriointeligente/visualizador/mapas/puntos-wifi' },
    { icono: 'commute', texto: 'VamosMed', ruta: '/territoriointeligente/visualizador/mapas/vamosmed' },
    { icono: 'volume_up', texto: 'Sensores de ruido', ruta: '/territoriointeligente/visualizador/mapas/sensores-ruido' },
    { icono: 'language', texto: 'Turismo', ruta: '/territoriointeligente/visualizador/mapas/turismo' },
    { icono: 'business', texto: 'SIATA', ruta: '/territoriointeligente/visualizador/mapas/siata' }
  ];

  // Opciones que aparecerán bajo "Cuadros de Control"
  opcionesCuadrosControl: Opcion[] = [
    { icono: 'directions_car', texto: 'Camiones EMVARIAS', ruta: '/territoriointeligente/visualizador/camiones' },
    { icono: 'description', texto: 'ReportesMed', ruta: '/territoriointeligente/visualizador/reportes' },
    { icono: 'wifi', texto: 'Puntos Wi-Fi', ruta: '/territoriointeligente/visualizador/puntos-wifi' },
    { icono: 'commute', texto: 'VamosMed', ruta: '/territoriointeligente/visualizador/vamosmed' },
    { icono: 'volume_up', texto: 'Sensores de ruido', ruta: '/territoriointeligente/visualizador/sensores-ruido' },
    { icono: 'email', texto: 'PQRSD', ruta: '/territoriointeligente/visualizador/pqrsd' },
    { icono: 'chat_bubble', texto: 'WhatsApp', ruta: '/territoriointeligente/visualizador/whatsapp' },
    { icono: 'language', texto: 'Turismo', ruta: '/territoriointeligente/visualizador/turismo' },
    { icono: 'business', texto: 'SIATA', ruta: '/territoriointeligente/visualizador/siata' }
  ];

  mostrarCuadrosControl: boolean = false; // Controlar la visibilidad del submenú Cuadros de Control
  mostrarMapas: boolean = false; // Controlar la visibilidad del submenú Mapas

  constructor(private router: Router) { }

  navegar(ruta: string | undefined) {
    if (ruta) {
      this.router.navigateByUrl(ruta);
    }
  }

  toggleCuadrosControl() {
    this.mostrarCuadrosControl = !this.mostrarCuadrosControl; // Alternar la visibilidad de "Cuadros de Control"
  }

  toggleMapas() {
    this.mostrarMapas = !this.mostrarMapas; // Alternar la visibilidad de "Mapas"
  }
}