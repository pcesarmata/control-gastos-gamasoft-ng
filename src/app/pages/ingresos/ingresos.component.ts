import { Component, OnInit } from '@angular/core';
import { IngresosService } from '../../core/services/ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss']
})
export class IngresosComponent implements OnInit {
  rows: any[] = [];
  loading = false;
  constructor(private ingresos: IngresosService) {}
  ngOnInit(): void {
    this.loading = true;
    this.ingresos.findAll().subscribe({
      next: data => { this.rows = data; this.loading = false; },
      error: _ => { this.loading = false; }
    });
  }
}
