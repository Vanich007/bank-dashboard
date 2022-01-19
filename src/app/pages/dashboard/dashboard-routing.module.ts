import { InvoicesComponent } from './invoices/invoices.component';
import { AuthGuard } from './../../shared/guards/auth.guard';
import { InvoiceDetailComponent } from '../../pages/dashboard/invoice-detail/invoice-detail.component';
import { SiteLayoutComponent } from '../../shared/layouts/site-layout/site-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: SiteLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: InvoicesComponent },
      { path: 'detail/:id', component: InvoiceDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
