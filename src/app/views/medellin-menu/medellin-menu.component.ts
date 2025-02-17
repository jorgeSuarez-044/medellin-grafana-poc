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
    { icono: 'directions_car', texto: 'Camiones EMVARIAS', ruta: '/mapas/camiones' },
    { icono: 'description', texto: 'ReportesMed', ruta: '/mapas/reportes' },
    { icono: 'wifi', texto: 'Puntos Wi-Fi', ruta: '/mapas/puntos-wifi' },
    { icono: 'commute', texto: 'VamosMed', ruta: '/mapas/vamosmed' },
    { icono: 'volume_up', texto: 'Sensores de ruido', ruta: '/mapas/sensores-ruido' },
    { icono: 'email', texto: 'PQRSD', ruta: '/mapas/pqr' },
    { icono: 'chat_bubble', texto: 'WhatsApp', ruta: '/mapas/whatsapp' },
    { icono: 'language', texto: 'Turismo', ruta: '/mapas/turismo' },
    { icono: 'business', texto: 'SIAJA', ruta: '/mapas/siaja' }
  ];

  // Opciones que aparecerán bajo "Cuadros de Control"
  opcionesCuadrosControl: Opcion[] = [
    { icono: 'directions_car', texto: 'Camiones EMVARIAS', ruta: '/camiones' },
    { icono: 'description', texto: 'ReportesMed', ruta: '/reportes' },
    { icono: 'wifi', texto: 'Puntos Wi-Fi', ruta: '/puntos-wifi' },
    { icono: 'commute', texto: 'VamosMed', ruta: '/vamosmed' },
    { icono: 'volume_up', texto: 'Sensores de ruido', ruta: '/sensores-ruido' },
    { icono: 'email', texto: 'PQRSD', ruta: '/pqrsd' },
    { icono: 'chat_bubble', texto: 'WhatsApp', ruta: '/whatsapp' },
    { icono: 'language', texto: 'Turismo', ruta: '/turismo' },
    { icono: 'business', texto: 'SIAJA', ruta: '/siaja' }
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
