import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierViewComponent } from './supplier-view/supplier-view.component';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
const routes: Routes = [
  { path: 'supplier-view', component: SupplierViewComponent },
  { path: 'supplier-add', component: SupplierAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
