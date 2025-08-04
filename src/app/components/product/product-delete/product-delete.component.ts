import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product;

  constructor(
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const proId = Number(this.route.snapshot.paramMap.get('proId')); // Convertido para número
    if (proId) {
      this.productService.readById(proId).subscribe(
        (product) => {
          this.product = product;
        },
        (error) => {
          this.productService.showMessage('Produto não encontrado!');
          this.router.navigate(['/products']);
        }
      );
    }
  }

  deleteProduct(): void {
    if (this.product.proId) {
      this.productService.delete(this.product.proId).subscribe(
        () => {
          this.productService.showMessage('Produto excluído com sucesso!');
          this.router.navigate(['/products']);
        },
        (error) => {
          this.productService.showMessage('Erro ao excluir produto!');
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
