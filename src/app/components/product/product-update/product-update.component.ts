import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product;

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const proId = Number(this.route.snapshot.paramMap.get('proId')); // Convertido para número
    if (proId) {
      this.productService.readById(proId).subscribe(
        (product: Product) => {
          this.product = product;
        },
        error => {
          this.productService.showMessage('Produto não encontrado!');
          this.router.navigate(['/products']);
        }
      );
    }
  }

  updateProduct(): void {
    if (this.product.proId) {
      this.productService.update(this.product.proId, this.product).subscribe(
        () => {
          this.productService.showMessage('Produto atualizado com sucesso!');
          this.router.navigate(['/products']);
        },
        error => {
          this.productService.showMessage('Erro ao atualizar produto!');
        }
      );
    } else {
      this.productService.showMessage('ID do produto inválido!');
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
