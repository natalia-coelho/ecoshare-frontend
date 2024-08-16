import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile-view/user-profile.component';
import { SuppliersModule } from '../suppliers/suppliers.module';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfileEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserProfileRoutingModule,
    SuppliersModule
  ],
  exports: [
    UserProfileComponent,
    UserProfileEditComponent
  ]
})
export class UserProfileModule { }
