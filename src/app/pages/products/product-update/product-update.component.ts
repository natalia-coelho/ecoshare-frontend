import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Produto } from 'src/app/models/Produto';
import { Utils } from '../utils';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  product: Produto | null = null;
  selectedFile: File | null = null;
  imageUrl: string | null = null;

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
        if (product.imagem) {
          this.imageUrl = 'data:image/jpeg;base64,' + product.imagem;
        }
      },
      error => {
        console.error('Erro ao carregar produto:', error);
      }
    );
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  async atualizarProduto(): Promise<void> {
    if (this.product) {
      if (this.selectedFile) {
        this.product.imagem = await Utils.convertFileToBase64(this.selectedFile);
      }

      this.productService.updateProduct(this.product.produtoId!, this.product).subscribe(
        updatedProduct => {
          alert('Produto atualizado com sucesso!');
          this.router.navigate(['/products']);
        },
        error => {
          console.error('Erro ao atualizar produto:', error);
          alert('Erro ao atualizar produto.');
        }
      );
    }
  }

  removerProduto(): void {
    if (this.product && confirm('Tem certeza que deseja remover este produto?')) {
      this.productService.deleteProduct(this.product.produtoId!).subscribe(() => {
        alert('Produto removido com sucesso!');
        this.router.navigate(['/products']);
      });
    }
  }
}
