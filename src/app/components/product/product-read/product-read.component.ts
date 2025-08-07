import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  @Input() products: Product[] = [];
  displayedColumns = ['proId', 'proNome', 'proPrecoCusto', 'proPrecoVenda', 'action'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    if (this.products.length === 0) {
      this.productService.read().subscribe(products => {
        this.products = products;
      });
    }
  }
}
