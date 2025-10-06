import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GastosComponent } from './pages/gastos/gastos.component';
import { IngresosComponent } from './pages/ingresos/ingresos.component';
import { DeudasComponent } from './pages/deudas/deudas.component';
import { AuthGuard } from './core/guards/auth.guard';

import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'gastos', component: GastosComponent },
      { path: 'ingresos', component: IngresosComponent },
      { path: 'deudas', component: DeudasComponent },
      { path: 'usuarios', component: UsuariosComponent }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
