import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { MdeCrudComponent } from '../subdimentions/mde-crud.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './usuarios.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, FormsModule, MdeCrudComponent],
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  activeTab: string = 'usuarios';
  users: any[] = [];
  filteredUsers: any[] = [];
  roles: any[] = [];
  grafanaRoles: any[] = [];
  auditLogs: any[] = [];
  filteredAuditLogs: any[] = [];
  userForm!: FormGroup;
  selectedUser: any = null;
  token: string = '';
  searchTerm: string = '';
  selectedRoles: string[] = [];
  selectedGrafanaRoles: string[] = [];
  roleAssignmentInProgress: boolean = false;
  roleError: string = '';
  loading: boolean = false;
  
  // Modal states
  showPasswordModal: boolean = false;
  showRolesModal: boolean = false;
  showGrafanaRolesModal: boolean = false;
  tempPassword: string = '';
  
  auditFilter = {
    type: '',
    action: ''
  };

  apiUrl = 'https://www.medellin.gov.co/flask-fiware/api/keycloak';

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.initUserForm();
  }

  ngOnInit(): void {
    this.getToken();
  }

  initUserForm() {
    this.userForm = this.fb.group({
      username: ['', 
        [Validators.required],
        [this.asyncUsernameValidator.bind(this)]
      ],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      enabled: [true],
      password: ['']
    });
  }

  asyncUsernameValidator(control: AbstractControl): Promise<ValidationErrors | null> {
    return this.validateUsername(control.value).then(isValid => {
      return isValid ? null : {};
    });
  }

  async validateUsername(username: string): Promise<boolean> {
    if (!username || this.selectedUser) return true;
    
    try {
      const users: any = await this.http.get<any[]>(
        `${this.apiUrl}/users?username=${username}`,
        { headers: this.getHeaders() }
      ).toPromise();
      
      return users.length === 0;
    } catch (error) {
      return false;
    }
  }

  getToken() {
    this.loading = true;
    const credentials = {
      username: "admin-user@hopu.eu",
      password: "5uLFJdgF65DqcMbGUzArLd29L4TAAdFHAMq8"
    };

    this.http.post<any>(`${this.apiUrl}/login`, credentials)
      .subscribe({
        next: (response) => {
          this.token = response.access_token;
          this.loadInitialData();
          this.loading = false;
        },
        error: (err) => {
          console.error('Error al obtener token:', err);
          this.showError('Error al iniciar sesión', 'No se pudo obtener el token de autenticación');
          this.loading = false;
        }
      });
  }

  loadInitialData() {
    this.loadUsers();
    this.loadRoles();
    this.loadGrafanaRoles();
    this.loadAuditLogs();
  }

  getHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    });
  }

  loadUsers() {
    this.loading = true;
    this.http.get<any[]>(`${this.apiUrl}/users`, { headers: this.getHeaders() })
      .subscribe({
        next: (users) => {
          this.users = users;
          this.filteredUsers = [...this.users];
          this.users.forEach(user => {
            this.loadUserRoles(user.id);
            this.loadUserGrafanaRoles(user.id);
          });
          this.loading = false;
        },
        error: (err) => {
          console.error('Error al cargar usuarios:', err);
          this.showError('Error', 'No se pudieron cargar los usuarios');
          this.loading = false;
        }
      });
  }

  loadUserRoles(userId: string) {
    this.http.get<any[]>(`${this.apiUrl}/user_roles/user_id/${userId}`, { headers: this.getHeaders() })
      .subscribe({
        next: (roles) => {
          const user = this.users.find(u => u.id === userId);
          if (user) {
            user.roles = roles;
            this.filterUsers();
          }
        },
        error: (err) => {
          console.error(`Error al cargar roles para usuario ${userId}:`, err);
        }
      });
  }

  loadUserGrafanaRoles(userId: string) {
    this.http.get<any[]>(`${this.apiUrl}/roles/user_id/${userId}`, { headers: this.getHeaders() })
      .subscribe({
        next: (roles) => {
          const user = this.users.find(u => u.id === userId);
          if (user) {
            user.grafanaRoles = roles;
            this.filterUsers();
          }
        },
        error: (err) => {
          console.error(`Error al cargar roles de Grafana para usuario ${userId}:`, err);
        }
      });
  }

  loadRoles() {
    this.loading = true;
    this.http.get<any[]>(`${this.apiUrl}/user_roles`, { headers: this.getHeaders() })
      .subscribe({
        next: (roles) => {
          this.roles = roles;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error al cargar roles:', err);
          this.showError('Error', 'No se pudieron cargar los roles');
          this.loading = false;
        }
      });
  }

  loadGrafanaRoles() {
    this.loading = true;
    this.http.get<any[]>(`${this.apiUrl}/roles`, { headers: this.getHeaders() })
      .subscribe({
        next: (roles) => {
          this.grafanaRoles = roles;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error al cargar roles de Grafana:', err);
          this.showError('Error', 'No se pudieron cargar los roles de Grafana');
          this.loading = false;
        }
      });
  }

  loadAuditLogs() {
    this.loading = true;
    this.http.get<any[]>(`${this.apiUrl}/user_logs`, { headers: this.getHeaders() })
      .subscribe({
        next: (logs) => {
          this.auditLogs = logs;
          this.http.get<any[]>(`${this.apiUrl}/role_logs`, { headers: this.getHeaders() })
            .subscribe({
              next: (roleLogs) => {
                this.auditLogs = [...this.auditLogs, ...roleLogs];
                this.filteredAuditLogs = [...this.auditLogs];
                this.filterAuditLogs();
                this.loading = false;
              },
              error: (err) => {
                console.error('Error al cargar logs de roles:', err);
                this.loading = false;
              }
            });
        },
        error: (err) => {
          console.error('Error al cargar logs de usuarios:', err);
          this.loading = false;
        }
      });
  }

assignSingleRole(userId: string, roleId: string): Promise<any> {
  return this.http.post(
    `${this.apiUrl}/user_roles/user_id/${userId}`, 
    {
      "roles": ["manage-users", "view-users", "view-events"]
    }, 
    { headers: this.getHeaders() }
  ).toPromise();
}
 removeSingleRole(userId: string, roleId: string): Promise<any> {
  return this.http.delete(
    `${this.apiUrl}/user_roles/user_id/${userId}/role_id/${roleId}`, 
    { headers: this.getHeaders() }
  ).toPromise();
}

assignSingleGrafanaRole(userId: string, roleId: string): Promise<any> {
  return this.http.put(
    `${this.apiUrl}/roles/user_id/${userId}/role_id/${roleId}`, 
    {}, 
    { headers: this.getHeaders() }
  ).toPromise();
}

 removeSingleGrafanaRole(userId: string, roleId: string): Promise<any> {
  return this.http.delete(
    `${this.apiUrl}/roles/user_id/${userId}/role_id/${roleId}`, 
    { headers: this.getHeaders() }
  ).toPromise();
}

  async onRoleChange(event: any, roleId: string, isGrafanaRole: boolean = false) {
    if (!this.selectedUser) {
      const targetArray = isGrafanaRole ? this.selectedGrafanaRoles : this.selectedRoles;
      if (event.target.checked) {
        if (!targetArray.includes(roleId)) {
          targetArray.push(roleId);
        }
      } else {
        const index = targetArray.indexOf(roleId);
        if (index > -1) {
          targetArray.splice(index, 1);
        }
      }
      return;
    }

    this.roleAssignmentInProgress = true;
    this.roleError = '';
    
    try {
      if (event.target.checked) {
        if (isGrafanaRole) {
          await this.assignSingleGrafanaRole(this.selectedUser.id, roleId);
        } else {
          await this.assignSingleRole(this.selectedUser.id, roleId);
        }
      } else {
        if (isGrafanaRole) {
          await this.removeSingleGrafanaRole(this.selectedUser.id, roleId);
        } else {
          await this.removeSingleRole(this.selectedUser.id, roleId);
        }
      }
      
      if (isGrafanaRole) {
        this.loadUserGrafanaRoles(this.selectedUser.id);
      } else {
        this.loadUserRoles(this.selectedUser.id);
      }
    } catch (error) {
      console.error('Error al actualizar rol:', error);
      this.roleError = 'Error al actualizar el rol. Intente nuevamente.';
      event.target.checked = !event.target.checked;
    } finally {
      this.roleAssignmentInProgress = false;
    }
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
    this.filteredAuditLogs = this.auditLogs
      .filter(log => {
        let matches = true;
        
        if (this.auditFilter.type) {
          matches = matches && log.resourceType === this.auditFilter.type;
        }
        
        if (this.auditFilter.action) {
          matches = matches && log.operationType === this.auditFilter.action;
        }
        
        return matches;
      })
      .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
  }

  clearAuditFilters() {
    this.auditFilter = { type: '', action: '' };
    this.filterAuditLogs();
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

  getUsersWithGrafanaRole(roleId: string): any[] {
    return this.users.filter(user => 
      user.grafanaRoles && user.grafanaRoles.some((role: any) => role.id === roleId)
    );
  }

  isRoleSelected(roleId: string, isGrafanaRole: boolean = false): boolean {
    if (this.selectedUser) {
      if (isGrafanaRole) {
        return this.selectedUser.grafanaRoles && this.selectedUser.grafanaRoles.some((r: any) => r.id === roleId);
      }
      return this.selectedUser.roles && this.selectedUser.roles.some((r: any) => r.id === roleId);
    }
    
    if (isGrafanaRole) {
      return this.selectedGrafanaRoles.includes(roleId);
    }
    return this.selectedRoles.includes(roleId);
  }

  createUser() {
    if (this.userForm.valid) {
      const userData = {
        username: this.userForm.value.username,
        email: this.userForm.value.email,
        firstName: this.userForm.value.firstName,
        lastName: this.userForm.value.lastName,
        enabled: this.userForm.value.enabled
      };

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
    this.loading = true;
    this.http.post(`${this.apiUrl}/users`, userData, { headers: this.getHeaders() })
      .subscribe({
        next: (response: any) => {
          const userId = response.id;
          const password = this.userForm.value.password;

          const promises = [];
          
          if (password) {
            promises.push(this.setUserPassword(userId, password));
          }
          
          Promise.all(promises)
            .then(() => {
              this.showSuccess('Usuario creado', 'El usuario ha sido creado correctamente');
              this.resetFormAndReload();
              this.loading = false;
              
              Swal.fire({
                title: 'Usuario creado',
                text: '¿Desea asignar roles ahora?',
                icon: 'success',
                showCancelButton: true,
                confirmButtonText: 'Sí, asignar roles',
                cancelButtonText: 'Más tarde',
                confirmButtonColor: '#334155'
              }).then((result) => {
                if (result.isConfirmed) {
                  this.editUser(response);
                  this.openRolesModal();
                }
              });
            })
            .catch(error => {
              this.showError('Error', 'Ocurrió un error al completar la creación del usuario');
              console.error('Error en el proceso de creación:', error);
              this.loading = false;
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
          } catch (e) {}
          
          this.showError('Error', errorMessage);
          this.loading = false;
        }
      });
  }

  setUserPassword(userId: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
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
      this.http.post(`${this.apiUrl}/user_roles/user_id/${userId}`, rolesData, { headers: this.getHeaders() })
        .subscribe({
          next: () => resolve(),
          error: (err) => reject(err)
        });
    });
  }

  assignGrafanaRolesToUser(userId: string, roles: string[]): Promise<void> {
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
    this.selectedGrafanaRoles = user.grafanaRoles ? user.grafanaRoles.map((r: any) => r.id) : [];
     if (this.selectedUser) {
    this.userForm.get('username')?.disable(); // 👈 Bloqueo definitivo
  }
    this.userForm.patchValue({
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      enabled: user.enabled,
      password: ''
    });
  }

  assignRoles(user: any) {
    this.selectedUser = user;
    this.selectedRoles = user.roles ? user.roles.map((r: any) => r.id) : [];
    this.selectedGrafanaRoles = user.grafanaRoles ? user.grafanaRoles.map((r: any) => r.id) : [];
    this.openRolesModal();
  }

  // Modal methods
  openPasswordModal() {
    this.tempPassword = '';
    this.showPasswordModal = true;
  }

  closePasswordModal() {
    this.showPasswordModal = false;
  }

  savePassword() {
    if (this.tempPassword && this.selectedUser) {
      this.loading = true;
      this.setUserPassword(this.selectedUser.id, this.tempPassword)
        .then(() => {
          this.showSuccess('Contraseña actualizada', 'La contraseña se ha actualizado correctamente');
          this.closePasswordModal();
          this.loading = false;
        })
        .catch(error => {
          this.showError('Error', 'No se pudo actualizar la contraseña');
          console.error('Error al actualizar contraseña:', error);
          this.loading = false;
        });
    }
  }

  openRolesModal() {
    this.showRolesModal = true;
  }

  closeRolesModal() {
    this.showRolesModal = false;
  }

  openGrafanaRolesModal() {
    this.showGrafanaRolesModal = true;
  }

  closeGrafanaRolesModal() {
    this.showGrafanaRolesModal = false;
  }

  saveRoles() {
    if (this.selectedUser) {
      this.loading = true;
   try {
    this.showSuccess('Roles actualizados', 'Los roles del sistema se han actualizado correctamente');
         
          this.closeRolesModal();
          this.loading = false;
   } catch (error) {
      this.showError('Error', 'No se pudieron actualizar los roles');
          console.error('Error al actualizar roles:', error);
          this.loading = false;
   }
             
    }
  }

  saveGrafanaRoles() {
    if (this.selectedUser) {
      this.loading = true;
    try {
      this.showSuccess('Roles actualizados', 'Los roles de Grafana se han actualizado correctamente');
          this.loadUserGrafanaRoles(this.selectedUser.id);
          this.closeGrafanaRolesModal();
          this.loading = false;
       
    } catch (error) {
        this.showError('Error', 'No se pudieron actualizar los roles de Grafana');
          console.error('Error al actualizar roles de Grafana:', error);
          this.loading = false;
       
    }
          
   
        
    }
  }

  cancelEdit() {
    this.selectedUser = null;
    this.selectedRoles = [];
    this.selectedGrafanaRoles = [];
    this.userForm.reset();
    this.userForm.patchValue({ enabled: true });
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
    this.loading = true;
    this.http.put(`${this.apiUrl}/users/${userId}`, userData, { headers: this.getHeaders() })
      .subscribe({
        next: () => {
          const promises: Promise<any>[] = [];
          
          if (password) {
            promises.push(this.setUserPassword(userId, password));
          }
          
          Promise.all(promises)
            .then(() => {
              this.showSuccess('Usuario actualizado', 'El usuario ha sido actualizado correctamente');
              this.resetFormAndReload();
              this.loading = false;
            })
            .catch(error => {
              this.showError('Error', 'Ocurrió un error al actualizar el usuario');
              console.error('Error en el proceso de actualización:', error);
              this.loading = false;
            });
        },
        error: (error) => {
          this.showError('Error', 'Ocurrió un error al actualizar el usuario');
          console.error('Error al actualizar usuario:', error);
          this.loading = false;
        }
      });
  }

  updateUserRoles(userId: string, newRoles: string[]): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.get<any[]>(`${this.apiUrl}/user_roles/user_id/${userId}`, { headers: this.getHeaders() })
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

  updateUserGrafanaRoles(userId: string, newRoles: string[]): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.get<any[]>(`${this.apiUrl}/roles/user_id/${userId}`, { headers: this.getHeaders() })
        .subscribe({
          next: (currentRoles) => {
            const currentRoleIds = currentRoles.map(r => r.id);
            
            const rolesToAdd = newRoles.filter(roleId => !currentRoleIds.includes(roleId));
            const rolesToRemove = currentRoleIds.filter(roleId => !newRoles.includes(roleId));
            
            const addPromise = rolesToAdd.length > 0 ? 
              this.assignGrafanaRolesToUser(userId, rolesToAdd) : Promise.resolve();
            
            const removePromise = rolesToRemove.length > 0 ? 
              this.removeGrafanaRolesFromUser(userId, rolesToRemove) : Promise.resolve();
            
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
      this.http.request('DELETE', `${this.apiUrl}/user_roles/user_id/${userId}`, {
        headers: this.getHeaders(),
        body: rolesData
      }).subscribe({
        next: () => resolve(),
        error: (err) => reject(err)
      });
    });
  }

  removeGrafanaRolesFromUser(userId: string, roles: string[]): Promise<void> {
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
    this.loading = true;
    this.http.delete(`${this.apiUrl}/users/${userId}`, { headers: this.getHeaders() })
      .subscribe({
        next: () => {
          this.showSuccess('Usuario eliminado', 'El usuario ha sido eliminado correctamente');
          this.loadUsers();
          this.loading = false;
        },
        error: (error) => {
          this.showError('Error', 'Ocurrió un error al eliminar el usuario');
          console.error('Error al eliminar usuario:', error);
          this.loading = false;
        }
      });
  }

  resetFormAndReload() {
    this.selectedUser = null;
    this.selectedRoles = [];
    this.selectedGrafanaRoles = [];
    this.userForm.reset();
    this.userForm.patchValue({ enabled: true });
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
      this.loadGrafanaRoles();
    } else if (tab === 'auditoria') {
      this.loadAuditLogs();
    }
  }

  viewRoleDetails(role: any, isGrafanaRole: boolean = false) {
    const users = isGrafanaRole ? 
      this.getUsersWithGrafanaRole(role.id) : 
      this.getUsersWithRole(role.id);
    Swal.fire({
      title: `Detalles del Rol: ${role.name}`,
      html: `
        <p><strong>Tipo:</strong> ${isGrafanaRole ? 'Grafana' : 'Sistema'}</p>
        <p><strong>Descripción:</strong> ${role.description || 'No disponible'}</p>
        <p><strong>Usuarios con este rol (${users.length}):</strong></p>
        <ul>
          ${users.map(u => `<li>${u.username} (${u.firstName} ${u.lastName})</li>`).join('')}
        </ul>
      `,
      confirmButtonColor: '#334155'
    });
  }
}