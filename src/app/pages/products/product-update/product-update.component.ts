import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Produto } from 'src/app/models/Produto';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})

export class ProductUpdateComponent implements OnInit {
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
    this.productService.updateProduct(this.product.produtoId, this.product).subscribe(
      updatedProduct => {
        alert('Produto atualizado com sucesso!');
        this.router.navigate(['/products']);
      },
      error => {
        console.error('Error updating product:', error);
        alert('Erro ao atualizar produto.');
      }
    );
  }

  removerProduto(): void {
    if (confirm('Tem certeza que deseja remover este produto?')) {
      this.productService.deleteProduct(this.product.produtoId).subscribe(() => {
        alert('Produto removido com sucesso!');
        (<any>this.router).navigate(['/products']);
      });
    }
  }
}
