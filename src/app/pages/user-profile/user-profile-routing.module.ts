import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile-view/user-profile.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';

const routes: Routes =
  [
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'user-profile-edit', component: UserProfileEditComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
