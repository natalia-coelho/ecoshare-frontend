import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fornecedor, TipoPessoa } from 'src/app/models/Fornecedor';
import { Produto } from 'src/app/models/Produto';
import { Usuario } from 'src/app/models/Usuario';
import { ProductService } from 'src/app/services/product.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.scss']
})
export class SupplierAddComponent implements OnInit {
  fornecedor: Fornecedor = {
    fornecerdorId: 0,
    razaoSocial: '',
    nomeFantasia: '',
    cpfCnpj: '',
    tipoPessoa: TipoPessoa.PessoaFisica,
    descricao: '',
    imagemUrl: '',
    usuarioId: 1,
  }

  selectedFile: File;

  constructor(
    private router: Router,
    private supplierService: SupplierService) { }

  ngOnInit(): void { }

  adicionarFornecedor(): void {
    this.supplierService.createSupplier(this.fornecedor).subscribe(() => {
      this.router.navigate(['/supplier-add']);
    });
  }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    this.supplierService.createSupplier(this.fornecedor).subscribe(response => {
      console.log('Fornecedor adicionado com sucesso!', response);
    });



  }
}