import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ClienteDTO } from './clienteDTO.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = 'http://localhost:8080/clientes';  // URL da sua API

  constructor(
    private snackBar: MatSnackBar,  // MatSnackBar para exibir mensagens
    private http: HttpClient       // HttpClient para fazer as requisições HTTP
  ) {}

  // Exibe uma mensagem de sucesso ou erro
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,  // Exibe a mensagem por 3 segundos
      horizontalPosition: 'right',  // Alinha a mensagem à direita
      verticalPosition: 'top',      // Alinha a mensagem ao topo
      panelClass: isError ? ['msg-error'] : ['msg-success']  // Estilo da mensagem (erro ou sucesso)
    });
  }

  // Cria um novo cliente
  create(cliente: ClienteDTO): Observable<ClienteDTO> {
    return this.http.post<ClienteDTO>(this.baseUrl, cliente);
  }

  // Lê todos os clientes
  read(): Observable<ClienteDTO[]> {
    return this.http.get<ClienteDTO[]>(this.baseUrl);
  }

  // Lê um cliente específico por ID
  readById(cliId: number): Observable<ClienteDTO> {
    const url = `${this.baseUrl}/${cliId}`;
    return this.http.get<ClienteDTO>(url);
  }

  // Atualiza os dados de um cliente existente
  update(cliente: ClienteDTO): Observable<ClienteDTO> {
    const url = `${this.baseUrl}/${cliente.cliId}`;
    return this.http.put<ClienteDTO>(url, cliente);
  }

  // Deleta um cliente pelo ID
  delete(cliId: number): Observable<void> {
    const url = `${this.baseUrl}/${cliId}`;
    return this.http.delete<void>(url);  // Deleta sem retornar dados
  }
}
