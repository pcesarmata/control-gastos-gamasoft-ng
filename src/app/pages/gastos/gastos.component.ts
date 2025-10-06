import { Component, OnInit } from '@angular/core';
import { GastosService } from '../../core/services/gastos.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent implements OnInit {
  rows: any[] = [];
  loading = false;
  constructor(private gastos: GastosService) {}
  ngOnInit(): void {
    this.loading = true;
    this.gastos.findAll().subscribe({
      next: data => { this.rows = data; this.loading = false; },
      error: _ => { this.loading = false; }
    });
  }
}
