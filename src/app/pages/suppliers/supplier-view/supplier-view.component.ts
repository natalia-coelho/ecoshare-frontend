import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-view',
  templateUrl: './supplier-view.component.html',
  styleUrls: ['./supplier-view.component.scss']
})
export class SupplierViewComponent implements OnInit {

  fornecedores: any

  constructor(
    private fornecedorService: SupplierService,
    private router: Router) { }

  ngOnInit(): void {
    this.fornecedorService.getSuppliers().subscribe(data => {
      this.fornecedores = data;
    })
  }

  removeSupplier(fornecedorId: number): void {
    this.fornecedorService.deleteSupplier(fornecedorId).subscribe(() => {
      alert('Fornecedor removido com sucesso!');
      this.fornecedores = this.fornecedores.filter(fornecedor => fornecedor.fornecedorId !== fornecedorId);
    });
  }
}
