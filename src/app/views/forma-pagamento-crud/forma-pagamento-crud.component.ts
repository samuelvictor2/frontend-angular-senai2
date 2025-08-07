import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormaPagamentoService } from 'src/app/components/formaPagamento/forma-pagamento.service';
import { FormaPagamento } from 'src/app/components/formaPagamento/formaPagamento.model';

@Component({
  selector: 'app-forma-pagamento-crud', // Certifique-se que o seletor está correto
  templateUrl: './forma-pagamento-crud.component.html', // Use o arquivo HTML correto
  styleUrls: ['./forma-pagamento-crud.component.css'] // Use o estilo correto
})
export class FormaPagamentoCrudComponent implements OnInit {

  searchTerm: string = '';
  allFormaPagamentos: FormaPagamento[] = [];
  filteredFormaPagamentos: FormaPagamento[] = [];

  constructor(private router: Router, private formaPagamentoService: FormaPagamentoService) { }

  ngOnInit(): void {
    // Carregar as formas de pagamento
    this.formaPagamentoService.read().subscribe(fpagamentos => {
      this.allFormaPagamentos = fpagamentos;
      this.filteredFormaPagamentos = fpagamentos; // Inicializa com todos os itens
    });
  }

  // Função para filtrar as formas de pagamento
  filterFormaPagamento(): void {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredFormaPagamentos = this.allFormaPagamentos.filter(fpg =>
      fpg.fpgDescricao?.toLowerCase().includes(term) // Filtra pela descrição
    );
  }

  // Navegar para a página de criação
  navigateToFormaPagamentoCreate(): void {
    this.router.navigate(['/fpagamentos/create']);
  }
}
