import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(productId).subscribe(
      (product: Produto) => {
        this.product = product;
        console.log('Product Details:', this.product);
      },
      error => {
        console.error('Error fetching product:', error);
      }
    );
  }

  atualizarProduto(): void {
    this.router.navigate(['/product-update', this.product.id]);
  }

  removerProduto(): void {
    if (confirm('Tem certeza que deseja remover este produto?')) {
      this.productService.deleteProduct(this.product.id).subscribe(() => {
        alert('Produto removido com sucesso!');
        (<any>this.router).navigate(['/produtos']);
      });
    }
  }
}

