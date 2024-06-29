import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierViewComponent } from './supplier-view/supplier-view.component';

const routes: Routes = [
  { path: 'supplier-view', component: SupplierViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
