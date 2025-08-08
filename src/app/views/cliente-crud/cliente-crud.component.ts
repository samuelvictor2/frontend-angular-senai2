import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteDTO } from 'src/app/components/cliente/clienteDTO.model';
import { ClienteService } from 'src/app/components/cliente/clientes.service';

@Component({
  selector: 'app-cliente-crud',
  templateUrl: './cliente-crud.component.html',
  styleUrls: ['./cliente-crud.component.css']
})
export class ClienteCrudComponent implements OnInit {

  searchTerm: string = '';           // Termo de pesquisa
  clientes: ClienteDTO[] = [];       // Todos os clientes
  filteredClientes: ClienteDTO[] = [];// Clientes filtrados

  constructor(
    private clienteService: ClienteService, // Serviço para gerenciar clientes
    private router: Router                // Roteador para navegação
  ) {}

  ngOnInit(): void {
    // Carregar todos os clientes ao inicializar
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes;
      this.filteredClientes = clientes; // Exibir todos os clientes inicialmente
    });
  }

  // Função de filtragem
  filterCliente(): void {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredClientes = this.clientes.filter(cliente =>
      cliente.cliNome?.toLowerCase().includes(term) || // Filtra pelo nome do cliente
      cliente.cliCpf?.includes(term) ||                // Ou pelo CPF
      cliente.conEmail?.toLowerCase().includes(term)    // Ou pelo e-mail
    );
  }

  // Navegar para a página de criação de um novo cliente
  navigateToClienteCreate(): void {
    this.router.navigate(['/clientes/create']);
  }
}
