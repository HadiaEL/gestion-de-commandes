import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { USERS } from '../model/list-users';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser: User | null = null;

  constructor(private router: Router) {
    const stored = localStorage.getItem('currentUser');
    if (stored) {
      this.currentUser = JSON.parse(stored);
    }
  }

  login(username: string, password: string): boolean {
    const user = USERS.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  getUser(): User | null {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  isGestionnaire(): boolean {
    return this.currentUser?.role === 'gestionnaire';
  }

  isUtilisateur(): boolean {
    return this.currentUser?.role === 'utilisateur';
  }

  getClientId(): number | undefined {
    return this.currentUser?.clientId;
  }
}
