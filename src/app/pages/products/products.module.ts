import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
// import { ProductListComponent } from '../../modules/products/product-list/product-list.component';
// import { ProductDetailsComponent } from '../../modules/products/product-details/product-details.component';
// import { ProductFormComponent } from '../../modules/products/product-form/product-form.component';
import { Produto } from 'src/app/models/Produto';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppComponent } from 'src/app/app.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    // ProductListComponent,
    ProductsComponent,
    ProductDetailsComponent,
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

