import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './product-view/products.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductUpdateComponent,
    ProductAddComponent,
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