import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { ClienteService } from '../../cliente/clientes.service';
import { VendaDTO } from '../venda.model';
import { ClienteDTO } from '../../cliente/clienteDTO.model';

@Component({
  selector: 'app-venda-read',
  templateUrl: './venda-read.component.html',
  styleUrls: ['./venda-read.component.css']
})
export class VendaReadComponent implements OnInit {

  cpfBusca = '';
  mostrarFormulario = false;
  vendas: VendaDTO[] = [];
  vendasFiltradas: VendaDTO[] = [];
  clientes: ClienteDTO[] = [];

  constructor(
    private vendaService: VendaService,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes => this.clientes = clientes);
    this.carregarVendas();
  }

  carregarVendas(): void {
    this.vendaService.read().subscribe(vendas => {
      this.vendas = vendas;
      this.vendasFiltradas = vendas;
    });
  }
filtrarPorCpf(): void {
  const cpfLimpo = this.cpfBusca.replace(/\D/g, ''); // Remove tudo que não for número

  if (!cpfLimpo) {
    this.vendasFiltradas = this.vendas;
    return;
  }

  const clienteEncontrado = this.clientes.find(cliente =>
    cliente.cliCpf.replace(/\D/g, '') === cpfLimpo
  );

  this.vendasFiltradas = clienteEncontrado
    ? this.vendas.filter(v => v.cliId === clienteEncontrado.cliId)
    : [];
}



limparBusca(): void {
  this.cpfBusca = '';
  this.vendasFiltradas = this.vendas;
}




  getClienteNome(cliId: number): string {
    const cliente = this.clientes.find(c => c.cliId === cliId);
    return cliente ? cliente.cliNome : 'Desconhecido';
  }

  onVendaCriada(): void {
    this.mostrarFormulario = false;
    this.carregarVendas();
  }
}
