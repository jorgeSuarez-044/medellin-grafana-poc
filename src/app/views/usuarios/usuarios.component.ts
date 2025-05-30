import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-s-gestion-smart',
  templateUrl: './usuarios.component.html',
  standalone:true,
  imports:[CommonModule, ReactiveFormsModule, HttpClientModule],
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
  apiUrl = 'https://keycloak-fiware.apps.preprodalcaldia.medellin.gov.co/keycloak/auth/admin/realms/fiware-server';

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      enabled: [true],
      role: ['']
    });
  }

  ngOnInit(): void {
    this.getToken();
  }

  getToken() {
    const body = new URLSearchParams();
    body.set('username', 'admin-user@hopu.eu');
    body.set('password', '5uLFJdgF65DqcMbGUzArLd29L4TAAdFHAMq8');
    body.set('grant_type', 'password');
    body.set('client_id', 'admin-cli');

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    this.http.post<any>(
      'https://keycloak-fiware.apps.preprodalcaldia.medellin.gov.co/keycloak/auth/realms/fiware-server/protocol/openid-connect/token',
      body.toString(),
      { headers }
    ).subscribe(response => {
      this.token = response.access_token;
      this.loadUsers();
      this.loadRoles();
      this.loadAuditLogs();
    });
  }

  loadUsers() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    this.http.get<any[]>(`${this.apiUrl}/users`, { headers }).subscribe(users => {
      this.users = users;
    });
  }

  loadRoles() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    this.http.get<any[]>(`${this.apiUrl}/groups`, { headers }).subscribe(roles => {
      this.roles = roles;
    });
  }

  loadAuditLogs() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    // Logs de usuarios
    this.http.get<any[]>(`${this.apiUrl}/admin-events`, { headers }).subscribe(logs => {
      this.auditLogs = logs;
    });

    // Logs específicos de roles (opcional)
    this.http.get<any[]>(`${this.apiUrl}/admin-events?resourceTypes=GROUP_MEMBERSHIP&operationTypes=CREATE&operationTypes=DELETE`, { headers })
      .subscribe(roleLogs => {
        // Combinar logs si es necesario
      });
  }

  createUser() {
    if (this.userForm.valid) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      });

      const userData = this.userForm.value;
      this.http.post(`${this.apiUrl}/users`, userData, { headers }).subscribe(() => {
        this.loadUsers();
        this.userForm.reset();
      });
    }
  }

  editUser(user: any) {
    this.selectedUser = user;
    this.userForm.patchValue({
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      enabled: user.enabled
    });
  }

  updateUser() {
    if (this.userForm.valid && this.selectedUser) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      });

      const userData = this.userForm.value;
      this.http.put(`${this.apiUrl}/users/${this.selectedUser.id}`, userData, { headers }).subscribe(() => {
        this.loadUsers();
        this.selectedUser = null;
        this.userForm.reset();
      });
    }
  }

  deleteUser(userId: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    this.http.delete(`${this.apiUrl}/users/${userId}`, { headers }).subscribe(() => {
      this.loadUsers();
    });
  }

  assignRole(userId: string, roleId: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    this.http.put(`${this.apiUrl}/users/${userId}/groups/${roleId}`, null, { headers }).subscribe(() => {
      this.loadUsers();
    });
  }

  removeRole(userId: string, roleId: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    this.http.delete(`${this.apiUrl}/users/${userId}/groups/${roleId}`, { headers }).subscribe(() => {
      this.loadUsers();
    });
  }

  changeTab(tab: string) {
    this.activeTab = tab;
  }
}