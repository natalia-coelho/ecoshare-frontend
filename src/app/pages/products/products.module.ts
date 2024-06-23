import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
// import { ProductListComponent } from '../../modules/products/product-list/product-list.component';
// import { ProductDetailsComponent } from '../../modules/products/product-details/product-details.component';
// import { ProductFormComponent } from '../../modules/products/product-form/product-form.component';
import { ProductsComponent } from './products.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductUpdateComponent } from './product-update/product-update.component';


@NgModule({
  declarations: [
    // ProductListComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductUpdateComponent,
    // ProductFormComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ProductsRoutingModule
  ]
})

export class ProductsModule {
}