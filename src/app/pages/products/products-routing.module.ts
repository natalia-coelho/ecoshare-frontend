import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './product-view/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'product-update/:id', component: ProductUpdateComponent },
  { path: 'product-add', component: ProductAddComponent },
  { path: 'product-filter', component: ProductFilterComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
