import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VendaDTO } from './venda.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  private baseUrl = 'http://localhost:8080/vendas'; // ajuste conforme sua API

  constructor(private http: HttpClient) {}

  // Criar nova venda
  create(venda: VendaDTO): Observable<VendaDTO> {
    return this.http.post<VendaDTO>(this.baseUrl, venda);
  }

  // Listar todas as vendas
  read(): Observable<VendaDTO[]> {
    return this.http.get<VendaDTO[]>(this.baseUrl);
  }

  // (Opcional) Buscar por ID, caso precise futuramente
  readById(id: number): Observable<VendaDTO> {
    return this.http.get<VendaDTO>(`${this.baseUrl}/${id}`);
  }
}
