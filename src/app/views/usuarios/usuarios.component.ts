import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-s-gestion-smart',
  templateUrl: './usuarios.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  activeTab: string = 'usuarios';
  users: any[] = [];
  roles: any[] = [];
  auditLogs: any[] = [];
  userForm: FormGroup;
  selectedUser: any = null;
  token: string = '';
  apiUrl = 'http://flask-fiware.apps.preprodalcaldia.medellin.gov.co/api/keycloak';

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      enabled: [true],
      password: ['', Validators.required],
      roles: [[]]
    });
  }

  ngOnInit(): void {
    this.getToken();
  }

  getToken() {
    const credentials = {
      username: "admin-user@hopu.eu",
      password: "5uLFJdgF65DqcMbGUzArLd29L4TAAdFHAMq8"
    };

    this.http.post<any>(`${this.apiUrl}/login`, credentials)
      .subscribe({
        next: (response) => {
          this.token = response.access_token;
          console.log('Token obtenido:', this.token);
          this.loadUsers();
          this.loadRoles();
          this.loadAuditLogs();
        },
        error: (err) => {
          console.error('Error al obtener token:', err);
          alert('Error al iniciar sesión. Verifica la consola para más detalles.');
        }
      });
  }

  getHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    });
  }

  loadUsers() {
    this.http.get<any[]>(`${this.apiUrl}/users`, { headers: this.getHeaders() })
      .subscribe(users => {
        this.users = users;
        // Para cada usuario, cargar sus roles
        this.users.forEach(user => {
          this.loadUserRoles(user.id);
        });
      });
  }

  loadUserRoles(userId: string) {
    this.http.get<any[]>(`${this.apiUrl}/user_roles/user_id/${userId}`, { headers: this.getHeaders() })
      .subscribe(roles => {
        const user = this.users.find(u => u.id === userId);
        if (user) {
          user.roles = roles;
        }
      });
  }

  loadRoles() {
    this.http.get<any[]>(`${this.apiUrl}/roles`, { headers: this.getHeaders() })
      .subscribe(roles => {
        this.roles = roles;
      });
  }

  loadAuditLogs() {
    // Logs de usuarios
    this.http.get<any[]>(`${this.apiUrl}/user_logs`, { headers: this.getHeaders() })
      .subscribe(logs => {
        this.auditLogs = logs;
      });

    // Logs de roles
    this.http.get<any[]>(`${this.apiUrl}/role_logs`, { headers: this.getHeaders() })
      .subscribe(roleLogs => {
        this.auditLogs = [...this.auditLogs, ...roleLogs];
      });
  }

createUser() {
    if (this.userForm.valid) {
        const userData = this.userForm.value;
        
        // Primero crear el usuario
        this.http.post(`${this.apiUrl}/users`, userData, { headers: this.getHeaders() })
        .subscribe({
            next: (response: any) => {
                const userId = response.id;
                
                // Asignar contraseña
                const passwordData = {
                    type: "password",
                    value: userData.password,
                    temporary: false
                };
                
                this.http.put(`${this.apiUrl}/password/${userId}`, passwordData, { headers: this.getHeaders() })
                .subscribe({
                    next: () => {
                        // Asignar roles si hay alguno seleccionado
                        if (userData.roles && userData.roles.length > 0) {
                            this.assignRolesToUser(userId, userData.roles);
                        } else {
                            this.loadUsers();
                            this.userForm.reset();
                            Swal.fire({
                                icon: 'success',
                                title: 'Éxito',
                                text: 'El usuario ha sido creado correctamente.',
                                confirmButtonColor: '#334155'
                            });
                        }
                    },
                    error: (error) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Ocurrió un error al asignar la contraseña.',
                            confirmButtonColor: '#334155'
                        });
                    }
                });
            },
            error: (error) => {
                let errorMessage = 'Ocurrió un error al crear el usuario';
                
                try {
                    const errorObj = JSON.parse(error.error);
                    if (errorObj.errorMessage && errorObj.errorMessage.includes("User exists with same email")) {
                        errorMessage = 'Ya existe un usuario con el mismo correo electrónico';
                    }
                } catch (e) {
                    // Si no se puede parsear el error, se mantiene el mensaje por defecto
                }
                
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: errorMessage,
                    confirmButtonColor: '#334155'
                });
            }
        });
    }
}

  assignRolesToUser(userId: string, roles: string[]) {
    const rolesData = { roles: roles };
    this.http.post(`${this.apiUrl}/user_roles/user_id/${userId}`, rolesData, { headers: this.getHeaders() })
      .subscribe(() => {
        this.loadUsers();
        this.userForm.reset();
      });
  }

  editUser(user: any) {
    this.selectedUser = user;
    this.userForm.patchValue({
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      enabled: user.enabled,
      password: '', // No mostramos la contraseña actual
      roles: user.roles ? user.roles.map((r: any) => r.id) : []
    });
  }

  updateUser() {
    if (this.userForm.valid && this.selectedUser) {
      const userData = this.userForm.value;
      const userId = this.selectedUser.id;

      // Actualizar datos básicos del usuario
      this.http.put(`${this.apiUrl}/users/${userId}`, userData, { headers: this.getHeaders() })
        .subscribe(() => {
          // Actualizar contraseña si se proporcionó una nueva
          if (userData.password) {
            const passwordData = {
              type: "password",
              value: userData.password,
              temporary: false
            };
            
            this.http.put(`${this.apiUrl}/password/${userId}`, passwordData, { headers: this.getHeaders() })
              .subscribe(() => {
                this.updateUserRoles(userId, userData.roles);
              });
          } else {
            this.updateUserRoles(userId, userData.roles);
          }
        });
    }
  }

  updateUserRoles(userId: string, newRoles: string[]) {
    // Primero obtener los roles actuales del usuario
    this.http.get<any[]>(`${this.apiUrl}/user_roles/user_id/${userId}`, { headers: this.getHeaders() })
      .subscribe(currentRoles => {
        const currentRoleIds = currentRoles.map(r => r.id);
        
        // Roles a añadir
        const rolesToAdd = newRoles.filter(roleId => !currentRoleIds.includes(roleId));
        if (rolesToAdd.length > 0) {
          this.assignRolesToUser(userId, rolesToAdd);
        }
        
        // Roles a eliminar
        const rolesToRemove = currentRoleIds.filter(roleId => !newRoles.includes(roleId));
        if (rolesToRemove.length > 0) {
          this.removeRolesFromUser(userId, rolesToRemove);
        }
        
        if (rolesToAdd.length === 0 && rolesToRemove.length === 0) {
          this.loadUsers();
          this.selectedUser = null;
          this.userForm.reset();
        }
      });
  }

  removeRolesFromUser(userId: string, roles: string[]) {
    const rolesData = { roles: roles };
    this.http.request('DELETE', `${this.apiUrl}/user_roles/user_id/${userId}`, {
      headers: this.getHeaders(),
      body: rolesData
    }).subscribe(() => {
      this.loadUsers();
      this.selectedUser = null;
      this.userForm.reset();
    });
  }

  deleteUser(userId: string) {
    if (confirm('¿Está seguro de que desea eliminar este usuario?')) {
      this.http.delete(`${this.apiUrl}/users/${userId}`, { headers: this.getHeaders() })
        .subscribe(() => {
          this.loadUsers();
        });
    }
  }

  assignRole(userId: string, roleId: string) {
    this.http.put(`${this.apiUrl}/roles/user_id/${userId}/role_id/${roleId}`, null, { headers: this.getHeaders() })
      .subscribe(() => {
        this.loadUsers();
      });
  }

  removeRole(userId: string, roleId: string) {
    this.http.delete(`${this.apiUrl}/roles/user_id/${userId}/role_id/${roleId}`, { headers: this.getHeaders() })
      .subscribe(() => {
        this.loadUsers();
      });
  }

  changeTab(tab: string) {
    this.activeTab = tab;
    if (tab === 'usuarios') {
      this.loadUsers();
    } else if (tab === 'roles') {
      this.loadRoles();
    } else if (tab === 'auditoria') {
      this.loadAuditLogs();
    }
  }
}