import { SummaryComponent } from './summary/summary.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      // { path: 'login', component: LoginPageComponent },
      // { path: 'register', component: RegisterPageComponent },
    ],
  },
  {
    path: 'dashboard',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: SummaryComponent },
      { path: 'detail/:id', component: InvoiceDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
