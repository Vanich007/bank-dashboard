import { LoginComponent } from './pages/users/login/login.component';
import { SummaryComponent } from './summary/summary.component';
import { InvoiceDetailComponent } from './pages/dashboard/invoice-detail/invoice-detail.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', redirectTo: 'login', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
