import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private router: Router) {}
  private isAuthenticated: boolean = false;
  login() {
    this.isAuthenticated = true;
  }
  logout() {
    this.isAuthenticated = false;
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
