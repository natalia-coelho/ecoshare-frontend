import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { Produto } from 'src/app/models/Produto';
import { ProductService } from 'src/app/services/product.service';
import { Utils } from '../utils';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products: Produto[] = [];
  imageUrl: string | null = null;
  userRole: string | null = null;

  constructor(
    private productService: ProductService,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.userRole = this.authService.getRole();
    this.productService.getProducts().subscribe(
      (products: Produto[]) => {
        this.products = products;
      }, error => {
        console.error('Erro ao carregar produtos:', error);
      }
    );
  }

  getProductImageUrl(product) {
    var url: String;
    if (product.imagem)
      url = Utils.getImageUrl(product);
    else
      return 'assets/img/brand/default-product.png';

    return url;
  }

  isRoleNullOrClient(): boolean {
    return this.userRole === 'CLIENTE' || this.userRole === null;
  }
}
