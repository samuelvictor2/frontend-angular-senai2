import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    proNome: '',
    proPrecoCusto: 0,
    proPrecoVenda: 0,
    proQuantidadeEstoque: 0,
    proCategoria: '',
    proCodigoDeBarras: '',
    proMarca: '',
    proUnidadeMedida: '',
    proAtivo: true,  // Alterado para booleano
    proDataCadastro: new Date().toISOString(),  // Convertido para string ISO
    proDataAtualizacao: new Date().toISOString()  // Convertido para string ISO
  };

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createProduct(): void {
    // As datas já estão em formato ISO, portanto, não precisamos fazer mais nenhuma conversão aqui.
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
