import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;

  constructor(private storageService: StorageService) {}

  async login(email: string, password: string): Promise<boolean> {
    const users = await this.storageService.get('users') || [];
    const user = users.find((u: any) => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  async signup(email: string, password: string): Promise<boolean> {
    const users = await this.storageService.get('users') || [];
    if (users.some((u: any) => u.email === email)) {
      return false; // User already exists
    }
    const newUser = { email, password };
    users.push(newUser);
    await this.storageService.set('users', users);
    this.currentUser = newUser;
    return true;
  }

  logout() {
    this.currentUser = null;
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}