import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://flask-fiware.apps.servicios.medellin.gov.co/api/keycloak/login';

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { username: string; password: string }) {
    return this.http.post<any>(this.apiUrl, credentials).pipe(
      tap(response => {
        localStorage.setItem('access_tokenadmin', response.access_token);
        this.router.navigate(['/inicio']);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('access_tokenadmin');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_tokenadmin');
  }
}
