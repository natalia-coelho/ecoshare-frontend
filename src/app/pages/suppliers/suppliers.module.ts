import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SupplierViewComponent } from './supplier-view/supplier-view.component';
import { FormsModule } from '@angular/forms';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import { SupplierUpdateComponent } from './supplier-update/supplier-update.component';


@NgModule({
  declarations: [
    SupplierViewComponent,
    SupplierAddComponent,
    SupplierDetailsComponent,
    SupplierUpdateComponent
  ],
  imports: [
    CommonModule,
    SuppliersRoutingModule,
    FormsModule
  ]
})
export class SuppliersModule { }
