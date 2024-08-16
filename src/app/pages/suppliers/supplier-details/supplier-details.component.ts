import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { Produto } from 'src/app/models/Produto';
import { ProductService } from 'src/app/services/product.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.scss']
})
export class SupplierDetailsComponent implements OnInit {
  fornecedor: Fornecedor
  products: Produto[];
  pedidos: any[] = [];
  instagramUrl = '';
  whatsAppUrl = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fornecedorService: SupplierService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const fornecedorId = Number(this.route.snapshot.paramMap.get('id'));
    this.fornecedorService.getSupplierById(fornecedorId).subscribe(
      (supplier: Fornecedor) => {
        this.fornecedor = supplier;
        this.loadProducts(supplier.fornecedorId);
        console.log('Supplier Details:', this.fornecedor);
      },
      error => {
        console.error('Error fetching supplier:', error);
      }
    );
  }

  loadProducts(fornecedorId: number) {
    this.productService.getProductsBySypplierId(fornecedorId).subscribe(data => {
      this.products = data;
    })
  }

  voltar() {
    this.router.navigate(['/supplier-view']);
  }
}
