import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importa RouterModule
import { CommonModule } from '@angular/common'; // Si usas CommonModule también
import { MenuOpcionesComponent } from './views/medellin-menu/medellin-menu.component';
import { InicioComponent } from './views/inicio/inicio.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,  // Marca el componente como independiente
  imports: [CommonModule, RouterModule, MenuOpcionesComponent]  // Asegúrate de incluir RouterModule
})
export class AppComponent {
  title = 'mi-aplicacion';
}
