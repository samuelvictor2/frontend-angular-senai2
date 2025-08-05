import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VendaService } from '../venda.service';
import { VendaDTO, CompraDTO } from '../venda.model';
import { FormaPagamentoService } from 'src/app/components/formaPagamento/forma-pagamento.service';
import { ProductService } from 'src/app/components/product/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClienteService } from '../../cliente/clientes.service';
import { Product } from '../../product/product.model';
import { ClienteDTO } from '../../cliente/clienteDTO.model';
import { FormaPagamento } from '../../formaPagamento/formaPagamento.model';

@Component({
  selector: 'app-venda-create',
  templateUrl: './venda-create.component.html',
  styleUrls: ['./venda-create.component.css']
})
export class VendaCreateComponent implements OnInit {

  @Output() vendaCriada = new EventEmitter<void>();

  venda: VendaDTO = {
    cliId: 0,
    fpgId: 0,
    vendaValorTotal: 0,
    vendaData: '',
    compras: []
  };

  clientes: ClienteDTO[] = [];
  formasPagamento: FormaPagamento[] = [];
  produtos: Product[] = [];
  produtoSelecionado: Product = {} as Product;
  quantidade: number = 1;

  constructor(
    private vendaService: VendaService,
    private clienteService: ClienteService,
    private formaPagamentoService: FormaPagamentoService,
    private produtoService: ProductService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.clienteService.read().subscribe(c => (this.clientes = c));
    this.formaPagamentoService.read().subscribe(f => (this.formasPagamento = f));
    this.produtoService.read().subscribe(p => (this.produtos = p));
  }

  adicionarProduto(): void {
    if (!this.produtoSelecionado?.proId || this.quantidade < 1) return;

    const compra: CompraDTO = {
      proId: this.produtoSelecionado.proId,
      compraQuantidade: this.quantidade,
      compraPrecoVenda: this.produtoSelecionado.proPrecoVenda
    };

    this.venda.compras.push(compra);
    this.calcularTotal();
  }

  removerCompra(index: number): void {
    this.venda.compras.splice(index, 1);
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.venda.vendaValorTotal = this.venda.compras.reduce(
      (soma, c) => soma + c.compraQuantidade * c.compraPrecoVenda,
      0
    );
  }

  criarVenda(): void {
    if (!this.venda.cliId) {
      alert('Selecione um cliente válido!');
      return;
    }
    if (!this.venda.fpgId) {
      alert('Selecione uma forma de pagamento válida!');
      return;
    }
    if (this.venda.compras.length === 0) {
      alert('Adicione ao menos um produto à venda!');
      return;
    }

    this.venda.vendaData = new Date().toISOString();

    this.vendaService.create(this.venda).subscribe(
      () => {
        this.snackBar.open('Venda criada com sucesso!', 'Fechar', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['msg-success']
        });
        this.limparFormulario();
        this.vendaCriada.emit();
      },
      error => {
        console.error('Erro ao criar a venda', error);
        alert('Erro ao criar a venda!');
      }
    );
  }

  limparFormulario(): void {
    this.venda = {
      cliId: 0,
      fpgId: 0,
      vendaValorTotal: 0,
      vendaData: '',
      compras: []
    };
    this.produtoSelecionado = {} as Product;
    this.quantidade = 1;
  }

  getProdutoById(proId: number) {
    return this.produtos.find(p => p.proId === proId);
  }
}
