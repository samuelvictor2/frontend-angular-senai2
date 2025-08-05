import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = 'http://localhost:8080/dashboard';

  constructor(private http: HttpClient) {}

  getLucroTotal(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/lucro-total`);
  }

  getVendasSemana(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/vendas-semana`);
  }
}
