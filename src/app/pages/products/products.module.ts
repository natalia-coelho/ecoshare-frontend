import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductUpdateComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ProductsRoutingModule,
    FormsModule
  ]
})

export class ProductsModule {
}