import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class GastosService {
  private api = `${environment.apiUrl}/gastos`;
  constructor(private http: HttpClient) {}
  findAll(): Observable<any[]> { return this.http.get<any[]>(this.api); }
  findById(id: number): Observable<any> { return this.http.get<any>(`${this.api}/${id}`); }
  create(body: any): Observable<any> { return this.http.post<any>(this.api, body); }
  update(id: number, body: any): Observable<any> { return this.http.put<any>(`${this.api}/${id}`, body); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.api}/${id}`); }
}
