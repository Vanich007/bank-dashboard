import { SummaryComponent } from '../../summary/summary.component';
import { InvoiceDetailComponent } from '../../pages/dashboard/invoice-detail/invoice-detail.component';
import { SiteLayoutComponent } from '../../shared/layouts/site-layout/site-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const dashboardRoutes: Routes = [
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
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
