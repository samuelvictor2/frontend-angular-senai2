import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/components/product/product.model';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  searchTerm: string = '';
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    // Agora os produtos são carregados corretamente
    this.productService.read().subscribe(products => {
      this.allProducts = products;
      this.filteredProducts = products; // mostra tudo inicialmente
    });
  }

  filterProduct(): void {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredProducts = this.allProducts.filter(p =>
      p.proNome?.toLowerCase().includes(term)
    );
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }
}
