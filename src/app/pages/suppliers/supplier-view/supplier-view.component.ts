import { Component, OnInit } from '@angular/core';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-view',
  templateUrl: './supplier-view.component.html',
  styleUrls: ['./supplier-view.component.scss']
})
export class SupplierViewComponent implements OnInit {

  fornecedores: Fornecedor[]

  constructor(private fornecedorService: SupplierService) { }

  ngOnInit(): void {
    this.fornecedorService.getSuppliers().subscribe(data => {
      this.fornecedores = data;
    })
  }
}
