import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authTokenKey = "authToken";
  private userRoleKey = "userRole";

  constructor() {}

  storeToken(token: string, role: string): void {
    const encodeToken = btoa(token);
    localStorage.setItem(this.authTokenKey, encodeToken);
    localStorage.setItem(this.userRoleKey, role);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.authTokenKey);
    return !!token;
  }

  getUserRole(): string | null {
    return localStorage.getItem(this.userRoleKey);
  }

  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }

  logout(): void {
    localStorage.removeItem(this.authTokenKey);
    localStorage.removeItem(this.userRoleKey);
  }
}
