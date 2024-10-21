import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async signup() {
    try {
      const result = await this.authService.signup(this.email, this.password);
      if (result) {
        this.router.navigate(['/employee-list']);
      } else {
        console.log('Signup failed');
      }
    } catch (error) {
      console.error('Signup error', error);
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}