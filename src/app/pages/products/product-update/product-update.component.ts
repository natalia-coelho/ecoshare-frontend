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
          // Convert byte array to base64 string
          const byteArray = new Uint8Array(Utils.convertImageToBase64(product.imagem));
          const binaryString = byteArray.reduce((data, byte) => data + String.fromCharCode(byte), '');
          this.imageUrl = 'data:image/jpeg;base64,' + btoa(binaryString);
        }
      },
      error => {
        console.error('Erro ao carregar produto:', error);
      }
    );
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  async uploadImage(): Promise<void> {
    if (!this.selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    try {
      await this.productService.uploadProductImage(this.product!.produtoId, formData).toPromise();
      alert('Imagem enviada com sucesso!');
      // Atualize a imagem exibida após o upload
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    } catch (error) {
      console.error('Erro ao enviar imagem:', error);
      alert('Erro ao enviar imagem.');
    }
  }

  atualizarProduto(): void {
    if (this.selectedFile) {
      this.uploadImage().then(() => {
        this.productService.updateProduct(this.product!.produtoId, this.product!).subscribe(
          updatedProduct => {
            alert('Produto atualizado com sucesso!');
            this.router.navigate(['/products']);
          },
          error => {
            console.error('Erro ao atualizar produto:', error);
            alert('Erro ao atualizar produto.');
          }
        );
      });
    } else {
      this.productService.updateProduct(this.product!.produtoId, this.product!).subscribe(
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
    if (confirm('Tem certeza que deseja remover este produto?')) {
      this.productService.deleteProduct(this.product!.produtoId).subscribe(() => {
        alert('Produto removido com sucesso!');
        this.router.navigate(['/products']);
      });
    }
  }
}
