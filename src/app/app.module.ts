import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GastosComponent } from './pages/gastos/gastos.component';
import { IngresosComponent } from './pages/ingresos/ingresos.component';
import { DeudasComponent } from './pages/deudas/deudas.component';

// PrimeNG
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

// Interceptor
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { UsuariosComponent } from '@pages/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    DashboardComponent,
    GastosComponent,
    IngresosComponent,
    DeudasComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CardModule,
    TableModule,
    ToolbarModule,
    DropdownModule,
    CalendarModule,
    DialogModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
