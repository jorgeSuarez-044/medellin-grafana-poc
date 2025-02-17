import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router'; // Importa RouterModule

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Proveer las rutas
    provideAnimationsAsync(), // Proveer animaciones
    RouterModule // Asegúrate de incluir RouterModule aquí
  ]
};
