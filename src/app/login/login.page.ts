import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    try {
      const result = await this.authService.login(this.email, this.password);
      if (result) {
        this.router.navigate(['/employee-list']);
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Login error', error);
    }
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}