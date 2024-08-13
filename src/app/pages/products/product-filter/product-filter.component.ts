import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProductService } from 'src/app/services/product.service';
import { Utils } from '../utils';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  public produtos: Produto[] = [];
  public searchTerm: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['term'];
      this.productService.searchProducts(this.searchTerm).subscribe(result => {
        this.produtos = result;
      });
    });
  }

  getProductImageUrl(product) {
    var url: String;
    if (product.imagem)
      url = Utils.getImageUrl(product);
    else
      return 'assets/img/brand/default-product.png';

    return url;
  }

}
