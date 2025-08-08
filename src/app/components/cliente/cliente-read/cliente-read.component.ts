import { Component, Input, OnInit } from '@angular/core';
import { ClienteDTO } from '../clienteDTO.model';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  @Input() clientes: ClienteDTO[] = []; // Recebe os clientes filtrados
  displayedColumns = ['cliId', 'cliNome', 'cliCpf', 'conEmail', 'conCelular', 'action']; // Definindo as colunas a serem exibidas

  constructor() {}

  ngOnInit(): void {
    // Inicialmente, a lista de clientes já é passada ao componente
  }
}
