import { Component, OnInit } from '@angular/core';
import { Usuario, UsuarioService } from '../../core/services/usuario.service';
import { Footer } from "primeng/api";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuarioDialog = false;
  usuario: Usuario = { id: 0, nombre: '', email: '', enabled: true, roles: [] };
  nuevo = false;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.loadUsuarios();
  }

  loadUsuarios() {
    this.usuarioService.getUsuarios().subscribe(data => this.usuarios = data);
  }

  openNew() {
    this.usuario = { id: 0, nombre: '', email: '', enabled: true, roles: [] };
    this.nuevo = true;
    this.usuarioDialog = true;
  }

  editUsuario(usuario: Usuario) {
    this.usuario = { ...usuario };
    this.nuevo = false;
    this.usuarioDialog = true;
  }

  saveUsuario() {
    if (this.nuevo) {
      this.usuarioService.createUsuario(this.usuario).subscribe(() => this.loadUsuarios());
    } else {
      this.usuarioService.updateUsuario(this.usuario).subscribe(() => this.loadUsuarios());
    }
    this.usuarioDialog = false;
  }

  deleteUsuario(usuario: Usuario) {
    if (confirm(`¿Seguro que deseas eliminar a ${usuario.nombre}?`)) {
      this.usuarioService.deleteUsuario(usuario.id).subscribe(() => this.loadUsuarios());
    }
  }
}