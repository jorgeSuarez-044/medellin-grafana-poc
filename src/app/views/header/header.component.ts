import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule , Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  imports: [RouterModule ,MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    constructor(private router: Router) {
      
    }
 irAPerfil(): void {
    this.router.navigate(['perfil/usuarios']);
  }
  logout(): void {
  localStorage.removeItem('access_token');
  
  // Verificar que se eliminó
  if (!localStorage.getItem('access_token')) {
    Swal.fire({
      icon: 'success',
      title: 'Token eliminado',
      text: 'El token de acceso ha sido removido del almacenamiento local.',
      confirmButtonText: 'OK'
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se pudo eliminar el token',
      confirmButtonText: 'OK'
    });
  }
}
}
