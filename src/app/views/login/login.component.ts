import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthService } from './../../services/login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMsg: string = '';

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  logout(): void {
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

  onSubmit(): void {
    if (this.loginForm.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Formulario incompleto',
        text: 'Por favor diligencie el formulario de inicio de sesión',
        confirmButtonColor: '#334155'
      });
      return;
    }

    this.auth.login(this.loginForm.value).subscribe({
      next: () => {},
      error: (err) => {
        console.error(err);
        this.errorMsg = 'Usuario o contraseña incorrectos';

        Swal.fire({
          icon: 'error',
          title: 'Error de autenticación',
          text: this.errorMsg,
          confirmButtonColor: '#334155'
        });
      }
    });
  }
}
