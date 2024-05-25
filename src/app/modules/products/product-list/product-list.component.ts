import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Produto[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }


}
