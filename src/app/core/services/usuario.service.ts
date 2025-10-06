import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  enabled: boolean;
  roles: string[];
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: Usuario[] = [
    { id: 1, nombre: 'Administrador', email: 'admin@example.com', enabled: true, roles: ['ADMIN'] },
    { id: 2, nombre: 'Editor', email: 'editor@example.com', enabled: true, roles: ['EDITOR'] },
    { id: 3, nombre: 'Invitado', email: 'guest@example.com', enabled: false, roles: ['VIEWER'] }
  ];

  getUsuarios(): Observable<Usuario[]> {
    return of(this.usuarios);
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    usuario.id = this.usuarios.length + 1;
    this.usuarios.push(usuario);
    return of(usuario);
  }

  updateUsuario(usuario: Usuario): Observable<Usuario> {
    const index = this.usuarios.findIndex(u => u.id === usuario.id);
    if (index > -1) this.usuarios[index] = usuario;
    return of(usuario);
  }

  deleteUsuario(id: number): Observable<void> {
    this.usuarios = this.usuarios.filter(u => u.id !== id);
    return of();
  }
}