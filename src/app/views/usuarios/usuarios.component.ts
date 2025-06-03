import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-s-gestion-smart',
  templateUrl: './usuarios.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,HttpClientModule, FormsModule],
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  activeTab: string = 'usuarios';
  users: any[] = [];
  filteredUsers: any[] = [];
  roles: any[] = [];
  auditLogs: any[] = [];
  filteredAuditLogs: any[] = [];
  userForm: FormGroup;
  selectedUser: any = null;
  token: string = '';
  searchTerm: string = '';
  selectedRoles: string[] = [];
  
  auditFilter = {
    type: '',
    action: ''
  };

  apiUrl = 'http://flask-fiware.apps.preprodalcaldia.medellin.gov.co/api/keycloak';

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      enabled: [true],
      password: ['', this.passwordValidator()]
    });
  }

  ngOnInit(): void {
    this.getToken();
  }

  passwordValidator() {
    return (control: any) => {
      // Solo requerido si no hay usuario seleccionado (creación)
      if (!this.selectedUser && !control.value) {
        return { required: true };
      }
      return null;
    };
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
          this.loadInitialData();
        },
        error: (err) => {
          console.error('Error al obtener token:', err);
          this.showError('Error al iniciar sesión', 'No se pudo obtener el token de autenticación');
        }
      });
  }

  loadInitialData() {
    this.loadUsers();
    this.loadRoles();
    this.loadAuditLogs();
  }

  getHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    });
  }

  loadUsers() {
    this.http.get<any[]>(`${this.apiUrl}/users`, { headers: this.getHeaders() })
      .subscribe({
        next: (users) => {
          this.users = users;
          this.filteredUsers = [...this.users];
          // Cargar roles para cada usuario
          this.users.forEach(user => this.loadUserRoles(user.id));
        },
        error: (err) => {
          console.error('Error al cargar usuarios:', err);
          this.showError('Error', 'No se pudieron cargar los usuarios');
        }
      });
  }

  loadUserRoles(userId: string) {
    this.http.get<any[]>(`${this.apiUrl}/roles/user_id/${userId}`, { headers: this.getHeaders() })
      .subscribe({
        next: (roles) => {
          const user = this.users.find(u => u.id === userId);
          if (user) {
            user.roles = roles;
            // Actualizar la lista filtrada
            this.filterUsers();
          }
        },
        error: (err) => {
          console.error(`Error al cargar roles para usuario ${userId}:`, err);
        }
      });
  }

  loadRoles() {
    this.http.get<any[]>(`${this.apiUrl}/roles`, { headers: this.getHeaders() })
      .subscribe({
        next: (roles) => {
          this.roles = roles;
        },
        error: (err) => {
          console.error('Error al cargar roles:', err);
          this.showError('Error', 'No se pudieron cargar los roles');
        }
      });
  }

  loadAuditLogs() {
    // Logs de usuarios
    this.http.get<any[]>(`${this.apiUrl}/user_logs`, { headers: this.getHeaders() })
      .subscribe({
        next: (logs) => {
          this.auditLogs = logs;
          // Logs de roles
          this.http.get<any[]>(`${this.apiUrl}/role_logs`, { headers: this.getHeaders() })
            .subscribe({
              next: (roleLogs) => {
                this.auditLogs = [...this.auditLogs, ...roleLogs];
                this.filteredAuditLogs = [...this.auditLogs];
              },
              error: (err) => {
                console.error('Error al cargar logs de roles:', err);
              }
            });
        },
        error: (err) => {
          console.error('Error al cargar logs de usuarios:', err);
        }
      });
  }

  filterUsers() {
    if (!this.searchTerm) {
      this.filteredUsers = [...this.users];
      return;
    }

    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(user => 
      (user.firstName && user.firstName.toLowerCase().includes(term)) ||
      (user.lastName && user.lastName.toLowerCase().includes(term)) ||
      (user.email && user.email.toLowerCase().includes(term)) ||
      (user.username && user.username.toLowerCase().includes(term))
    );
  }

  filterAuditLogs() {
    this.filteredAuditLogs = this.auditLogs.filter(log => {
      let matches = true;
      
      if (this.auditFilter.type) {
        matches = matches && log.resourceType === this.auditFilter.type;
      }
      
      if (this.auditFilter.action) {
        matches = matches && log.operationType === this.auditFilter.action;
      }
      
      return matches;
    });
  }

  getActionName(action: string): string {
    switch(action) {
      case 'CREATE': return 'Creación';
      case 'UPDATE': return 'Actualización';
      case 'DELETE': return 'Eliminación';
      default: return action;
    }
  }

  getResourceType(type: string): string {
    switch(type) {
      case 'USER': return 'Usuario';
      case 'ROLE': return 'Rol';
      default: return type;
    }
  }

  getUsersWithRole(roleId: string): any[] {
    return this.users.filter(user => 
      user.roles && user.roles.some((role: any) => role.id === roleId)
    );
  }

  isRoleSelected(roleId: string): boolean {
    return this.selectedRoles.includes(roleId);
  }

  onRoleChange(event: any, roleId: string) {
    if (event.target.checked) {
      if (!this.selectedRoles.includes(roleId)) {
        this.selectedRoles.push(roleId);
      }
    } else {
      this.selectedRoles = this.selectedRoles.filter(id => id !== roleId);
    }
  }

  createUser() {
    if (this.userForm.valid) {
      const userData = {
        username: this.userForm.value.username,
        email: this.userForm.value.email,
        firstName: this.userForm.value.firstName,
        lastName: this.userForm.value.lastName
      };

      // Mostrar confirmación
      Swal.fire({
        title: 'Crear usuario',
        text: '¿Está seguro de que desea crear este usuario?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#334155',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, crear',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.createUserWithRoles(userData);
        }
      });
    }
  }

  createUserWithRoles(userData: any) {
    // Crear usuario
    this.http.post(`${this.apiUrl}/users`, userData, { headers: this.getHeaders() })
      .subscribe({
        next: (response: any) => {
          const userId = response.id;
          const password = this.userForm.value.password;

          // Asignar contraseña
          this.setUserPassword(userId, password)
            .then(() => {
              // Asignar roles si hay alguno seleccionado
              if (this.selectedRoles.length > 0) {
                return this.assignRolesToUser(userId, this.selectedRoles);
              }
              return Promise.resolve();
            })
            .then(() => {
              this.showSuccess('Usuario creado', 'El usuario ha sido creado correctamente');
              this.resetFormAndReload();
            })
            .catch(error => {
              this.showError('Error', 'Ocurrió un error al completar la creación del usuario');
              console.error('Error en el proceso de creación:', error);
            });
        },
        error: (error) => {
          let errorMessage = 'Ocurrió un error al crear el usuario';
          
          try {
            const errorObj = JSON.parse(error.error);
            if (errorObj.errorMessage && errorObj.errorMessage.includes("User exists with same email")) {
              errorMessage = 'Ya existe un usuario con el mismo correo electrónico';
            } else if (errorObj.errorMessage && errorObj.errorMessage.includes("User exists with same username")) {
              errorMessage = 'Ya existe un usuario con el mismo nombre de usuario';
            }
          } catch (e) {
            // Si no se puede parsear el error, se mantiene el mensaje por defecto
          }
          
          this.showError('Error', errorMessage);
        }
      });
  }

  setUserPassword(userId: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!password) {
        resolve();
        return;
      }

      const passwordData = {
        type: "password",
        value: password,
        temporary: false
      };
      
      this.http.put(`${this.apiUrl}/password/${userId}`, passwordData, { headers: this.getHeaders() })
        .subscribe({
          next: () => resolve(),
          error: (err) => reject(err)
        });
    });
  }

  assignRolesToUser(userId: string, roles: string[]): Promise<void> {
    return new Promise((resolve, reject) => {
      const rolesData = { roles: roles };
      this.http.post(`${this.apiUrl}/roles/user_id/${userId}`, rolesData, { headers: this.getHeaders() })
        .subscribe({
          next: () => resolve(),
          error: (err) => reject(err)
        });
    });
  }

  editUser(user: any) {
    this.selectedUser = user;
    this.selectedRoles = user.roles ? user.roles.map((r: any) => r.id) : [];
    
    this.userForm.patchValue({
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
  
      password: '' // No mostramos la contraseña actual
    });
  }

  cancelEdit() {
    this.selectedUser = null;
    this.selectedRoles = [];
    this.userForm.reset();
  }

  updateUser() {
    if (this.userForm.valid && this.selectedUser) {
      const userData = {
        email: this.userForm.value.email,
        firstName: this.userForm.value.firstName,
        lastName: this.userForm.value.lastName,
        enabled: this.userForm.value.enabled
      };

      const userId = this.selectedUser.id;
      const password = this.userForm.value.password;

      // Mostrar confirmación
      Swal.fire({
        title: 'Actualizar usuario',
        text: '¿Está seguro de que desea actualizar este usuario?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#334155',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, actualizar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.updateUserWithRoles(userId, userData, password);
        }
      });
    }
  }

  updateUserWithRoles(userId: string, userData: any, password: string) {
    // Actualizar datos básicos del usuario
    this.http.put(`${this.apiUrl}/users/${userId}`, userData, { headers: this.getHeaders() })
      .subscribe({
        next: () => {
          const promises: Promise<any>[] = [];
          
          // Actualizar contraseña si se proporcionó una nueva
          if (password) {
            promises.push(this.setUserPassword(userId, password));
          }
          
          // Actualizar roles
          promises.push(this.updateUserRoles(userId, this.selectedRoles));
          
          Promise.all(promises)
            .then(() => {
              this.showSuccess('Usuario actualizado', 'El usuario ha sido actualizado correctamente');
              this.resetFormAndReload();
            })
            .catch(error => {
              this.showError('Error', 'Ocurrió un error al actualizar el usuario');
              console.error('Error en el proceso de actualización:', error);
            });
        },
        error: (error) => {
          this.showError('Error', 'Ocurrió un error al actualizar el usuario');
          console.error('Error al actualizar usuario:', error);
        }
      });
  }

  updateUserRoles(userId: string, newRoles: string[]): Promise<void> {
    return new Promise((resolve, reject) => {
      // Primero obtener los roles actuales del usuario
      this.http.get<any[]>(`${this.apiUrl}/roles/user_id/${userId}`, { headers: this.getHeaders() })
        .subscribe({
          next: (currentRoles) => {
            const currentRoleIds = currentRoles.map(r => r.id);
            
            const rolesToAdd = newRoles.filter(roleId => !currentRoleIds.includes(roleId));
            const rolesToRemove = currentRoleIds.filter(roleId => !newRoles.includes(roleId));
            
            const addPromise = rolesToAdd.length > 0 ? 
              this.assignRolesToUser(userId, rolesToAdd) : Promise.resolve();
            
            const removePromise = rolesToRemove.length > 0 ? 
              this.removeRolesFromUser(userId, rolesToRemove) : Promise.resolve();
            
            Promise.all([addPromise, removePromise])
              .then(() => resolve())
              .catch(err => reject(err));
          },
          error: (err) => reject(err)
        });
    });
  }

  removeRolesFromUser(userId: string, roles: string[]): Promise<void> {
    return new Promise((resolve, reject) => {
      const rolesData = { roles: roles };
      this.http.request('DELETE', `${this.apiUrl}/roles/user_id/${userId}`, {
        headers: this.getHeaders(),
        body: rolesData
      }).subscribe({
        next: () => resolve(),
        error: (err) => reject(err)
      });
    });
  }

  confirmDelete(userId: string) {
    Swal.fire({
      title: 'Eliminar usuario',
      text: '¿Está seguro de que desea eliminar este usuario? Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#334155',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteUser(userId);
      }
    });
  }

  deleteUser(userId: string) {
    this.http.delete(`${this.apiUrl}/users/${userId}`, { headers: this.getHeaders() })
      .subscribe({
        next: () => {
          this.showSuccess('Usuario eliminado', 'El usuario ha sido eliminado correctamente');
          this.loadUsers();
        },
        error: (error) => {
          this.showError('Error', 'Ocurrió un error al eliminar el usuario');
          console.error('Error al eliminar usuario:', error);
        }
      });
  }

  resetFormAndReload() {
    this.selectedUser = null;
    this.selectedRoles = [];
    this.userForm.reset();
    this.loadUsers();
  }

  showSuccess(title: string, message: string) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: message,
      confirmButtonColor: '#334155'
    });
  }

  showError(title: string, message: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: message,
      confirmButtonColor: '#334155'
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