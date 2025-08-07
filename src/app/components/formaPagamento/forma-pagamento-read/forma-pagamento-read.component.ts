import { Component, Input, OnInit } from '@angular/core';
import { FormaPagamento } from '../formaPagamento.model';
import { FormaPagamentoService } from '../forma-pagamento.service';

@Component({
  selector: 'app-forma-pagamento-read',
  templateUrl: './forma-pagamento-read.component.html',
  styleUrls: ['./forma-pagamento-read.component.css']
})
export class FormaPagamentoReadComponent implements OnInit {

  @Input() fpagamentos: FormaPagamento[] = [];
  displayedColumns = ['fpgId', 'fpgDescricao', 'action'];

  constructor(private formaPagamentoService: FormaPagamentoService) { }

  ngOnInit(): void {
    if (this.fpagamentos.length === 0) {
      this.formaPagamentoService.read().subscribe(fpagamentos => {
        this.fpagamentos = fpagamentos;
      });
    }
  }
}
