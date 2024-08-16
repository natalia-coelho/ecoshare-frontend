import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ProductsComponent } from 'src/app/pages/products/product-view/products.component';
import { ProductDetailsComponent } from 'src/app/pages/products/product-details/product-details.component';
import { ProductUpdateComponent } from 'src/app/pages/products/product-update/product-update.component';
import { ProductAddComponent } from 'src/app/pages/products/product-add/product-add.component';
import { SupplierViewComponent } from 'src/app/pages/suppliers/supplier-view/supplier-view.component';
import { SupplierAddComponent } from 'src/app/pages/suppliers/supplier-add/supplier-add.component';
import { SupplierDetailsComponent } from 'src/app/pages/suppliers/supplier-details/supplier-details.component';
import { SupplierUpdateComponent } from 'src/app/pages/suppliers/supplier-update/supplier-update.component';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile-view/user-profile.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },

    { path: 'products', component: ProductsComponent },
    { path: 'product-detail/:id', component: ProductDetailsComponent },
    { path: 'product-update/:id', component: ProductUpdateComponent },
    { path: 'product-add', component: ProductAddComponent },

    { path: 'supplier-view', component: SupplierViewComponent },
    { path: 'supplier-add', component: SupplierAddComponent },
    { path: 'supplier-detail/:id', component: SupplierDetailsComponent },
    { path: 'supplier-update/:id', component: SupplierUpdateComponent },
];
