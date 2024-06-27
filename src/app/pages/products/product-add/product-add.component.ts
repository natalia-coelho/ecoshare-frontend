import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  product: Produto = {
    nome: '',
    preco: 0.0,
    descricao: '',
    imagemProduto: '',
    fornecedorId: 1
  };

  constructor(
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void { }

  adicionarProduto(): void {
    this.productService.createProduct(this.product).subscribe(() => {
      this.router.navigate(['/product-add']); // Redirect to the product list page after adding
    });
  }
}
