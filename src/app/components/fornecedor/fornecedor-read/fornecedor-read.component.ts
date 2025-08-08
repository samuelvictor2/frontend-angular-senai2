import { Component, OnInit } from '@angular/core';
import { FornecedorDTO } from '../fornecedorDTO.model';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class FornecedorReadComponent implements OnInit {

  fornecedores: FornecedorDTO[] = [];  // Inicializa o array de fornecedores
  displayedColumns = ['forId', 'forNomeFantasia', 'forCnpj', 'forRazaoSocial', 'action'];  // Define as colunas a serem exibidas

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit(): void {
    // Chama o serviço para obter a lista de fornecedores
    this.fornecedorService.getAll().subscribe(
      (fornecedores) => {
        console.log(fornecedores);  // Verifica no console a estrutura da resposta
        this.fornecedores = fornecedores;  // Atribui os fornecedores à variável fornecedores
      },
      (error) => {
        console.error('Erro ao carregar fornecedores:', error);  // Exibe erro no console, se houver
      }
    );
  }
}
