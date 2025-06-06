import { Component } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuOpcionesComponent } from './views/medellin-menu/medellin-menu.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MenuOpcionesComponent, MatIconModule]
})
export class AppComponent {
  title = 'mi-aplicacion';
  currentUrl: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }

  irAPerfil(): void {
    this.router.navigate(['perfil/usuarios']);
  }

  mostrarLayout(): boolean {
    // Oculta menú y header en la ruta /login
    return this.currentUrl !== '/login';
  }
}
