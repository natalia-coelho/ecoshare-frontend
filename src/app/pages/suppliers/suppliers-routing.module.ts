import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierViewComponent } from './supplier-view/supplier-view.component';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { SupplierUpdateComponent } from './supplier-update/supplier-update.component';

const routes: Routes = [
  { path: 'supplier-view', component: SupplierViewComponent },
  { path: 'supplier-add', component: SupplierAddComponent },
  { path: 'supplier-detail/:id', component: SupplierDetailsComponent },
  { path: 'supplier-update/:id', component: SupplierUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
