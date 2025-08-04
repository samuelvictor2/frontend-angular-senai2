import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private baseUrl = 'http://localhost:8080/api/produtos'; // Corrigido para incluir 'api'

  constructor(private http: HttpClient) { }

  // Criar Produto
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);  // Corrigido para baseUrl
  }

  // Buscar todos os produtos
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);  // Corrigido para baseUrl
  }

  // Buscar produto por ID
  readById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);  // Corrigido para baseUrl
  }

  // Atualizar produto
  update(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${id}`, product);  // Corrigido para baseUrl
  }

  // Deletar produto
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);  // Corrigido para baseUrl
  }

  // Exibir mensagens
  showMessage(msg: string): void {
    console.log(msg);
  }
}
