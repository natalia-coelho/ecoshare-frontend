import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsModule } from 'src/app/pages/products/products.module';
import { SuppliersModule } from 'src/app/pages/suppliers/suppliers.module';
import { UserProfileModule } from 'src/app/pages/user-profile/user-profile.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ProductsModule,
    SuppliersModule,
    UserProfileModule
  ],
  declarations: [
    DashboardComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
  ]
})

export class AdminLayoutModule { }
