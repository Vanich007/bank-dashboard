import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthLayoutComponent } from './../../shared/layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './login/login.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      // { path: 'register', component: RegisterPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
})
export class UsersRoutingModule {}
