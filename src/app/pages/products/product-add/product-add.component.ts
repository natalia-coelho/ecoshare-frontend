import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria, Produto } from 'src/app/models/Produto';
import { ProductService } from 'src/app/services/product.service';
import { Utils } from '../utils';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  product: Produto = {
    nome: '',
    preco: 0.0,
    categoria: Categoria.Outros,
    descricao: '',
    imagem: '',
    fornecedorId: 1
  };

  selectedFile: File | null = null;
  imageUrl: string | null = null;

  constructor(
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void { }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
        this.product.imagem = this.imageUrl.split(',')[1]; // Armazena a string base64 sem o prefixo "data:image/jpeg;base64,"
      };
      reader.readAsDataURL(this.selectedFile);
    }
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

  async adicionarProduto() {
    if (this.product && this.selectedFile) {
      this.product.imagem = await Utils.convertFileToBase64(this.selectedFile);
    }
    this.productService.createProduct(this.product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }

  // TODO: implementar esse método pegando o fornecedor vinculado ao usuário que está cadastrando o produto
  getFornecedorVinculadoUsuario() {
    var fornecedor = this.product.fornecedorId = 1;
    return fornecedor;
  }
}
