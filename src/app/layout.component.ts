import { Component } from '@angular/core';
import { MenuOpcionesComponent } from './views/medellin-menu/medellin-menu.component';
import { HeaderComponent } from './views/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, MenuOpcionesComponent, HeaderComponent, RouterModule, RouterOutlet],
  template: `
    <app-header></app-header>
    <app-menu-opciones></app-menu-opciones>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {}
