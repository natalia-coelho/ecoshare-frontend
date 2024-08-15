import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProductService } from 'src/app/services/product.service';
import { Utils } from '../utils';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {
  product: Produto;
  imageUrl: string | null = null;
  userRole: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.userRole = this.authService.getRole();
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(productId).subscribe(
      (product: Produto) => {
        this.product = product;
        if (product.imagem)
          this.imageUrl = Utils.getImageUrl(product);
        console.log('Product Details:', this.product);
      },
      error => {
        console.error('Error fetching product:', error);
      }
    );
  }

  atualizarProduto(): void {
    this.router.navigate(['/product-update', this.product.produtoId]);
  };

  removerProduto(): void {
    if (confirm('Tem certeza que deseja remover este produto?')) {
      this.productService.deleteProduct(this.product.produtoId).subscribe(() => {
        alert('Produto removido com sucesso!');
        this.router.navigate(['/products']);
      });
    }
  }
  canUpdateOrDelete(): boolean {
    return this.userRole !== 'CLIENTE' && this.userRole !== null;
  }

  getProductImageUrl(product) {
    var url: String;
    if (product && product.imagem)
      url = Utils.getImageUrl(product);
    else
      url = 'assets/img/brand/default-product.png';

    return url;
  }
}
