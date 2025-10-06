import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.loading = true;
    this.auth.login(this.email, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        alert('Credenciales inválidas');
      }
    });
  }
}
