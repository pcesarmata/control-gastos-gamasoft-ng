import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  sidebarVisible = true;
  constructor(private auth: AuthService, private router: Router) {}
  logout() { this.auth.logout(); this.router.navigate(['/login']); }
}
