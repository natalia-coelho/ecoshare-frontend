import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.scss']
})
export class SupplierDetailsComponent implements OnInit {
  fornecedor: Fornecedor
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fornecedorService: SupplierService
  ) { }

  ngOnInit(): void {
    const fornecedorId = Number(this.route.snapshot.paramMap.get('id'));
    this.fornecedorService.getSupplierById(fornecedorId).subscribe(
      (supplier: Fornecedor) => {
        this.fornecedor = supplier;
        console.log('Supplier Details:', this.fornecedor);
      },
      error => {
        console.error('Error fetching supplier:', error);
      }
    );
  }

  voltar() {
    this.router.navigate(['/supplier-view']);
  }
}
