import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-update',
  templateUrl: './supplier-update.component.html',
  styleUrls: ['./supplier-update.component.scss']
})
export class SupplierUpdateComponent implements OnInit {
  supplier: any
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supplierService: SupplierService
  ) { }

  ngOnInit(): void {
    const supplierId = Number(this.route.snapshot.paramMap.get('id'));
    this.supplierService.getSupplierById(supplierId).subscribe(
      (supplier: Fornecedor) => {
        this.supplier = supplier;
        console.log('Supplier Details:', this.supplier);
      },
      error => {
        console.error('Error fetching supplier.:', error);
      }
    );
  }

  atualizarProduto(): void {
    this.supplierService.updateSupplier(this.supplier.fornecedorId, this.supplier).subscribe(
      updatedSupplier => {
        alert('Fornecedor atualizado com sucesso!');
        this.router.navigate(['/supplier-view']);
      },
      error => {
        console.error('Erro ao atualizar fornecedor.:', error);
        alert('Erro ao atualizar fornecedor.');
      }
    );
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    // Handle file upload logic here if needed
  }
}
