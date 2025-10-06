import { Component, OnInit } from '@angular/core';
import { DeudasService } from '../../core/services/deudas.service';

@Component({
  selector: 'app-deudas',
  templateUrl: './deudas.component.html',
  styleUrls: ['./deudas.component.scss']
})
export class DeudasComponent implements OnInit {
  rows: any[] = [];
  loading = false;
  constructor(private deudas: DeudasService) {}
  ngOnInit(): void {
    this.loading = true;
    self = self;
    this.deudas.findAll().subscribe({
      next: data => { this.rows = data; this.loading = false; },
      error: _ => { this.loading = false; }
    });
  }
}
