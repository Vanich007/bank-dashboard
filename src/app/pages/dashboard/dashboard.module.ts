import { LoaderComponent } from './../../shared/loaders/loader/loader.component';
import { CutArrayPipe } from './../../shared/pipes/arrayPipe';
import { CutTextPipe } from './../../shared/pipes/myPipe';
import { MaterialModule } from './../../shared/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { SummaryComponent } from '../../summary/summary.component';
import { InvoiceService } from './invoice.service';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceBlocksComponent } from './invoice-blocks/invoice-blocks.component';
import {
  DlDateTimeDateModule,
  DlDateTimePickerModule,
} from 'angular-bootstrap-datetimepicker';
import { ChartComponent } from './chart/chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    InvoicesComponent,
    InvoiceBlocksComponent,
    SummaryComponent,
    InvoiceDetailComponent,
    CutTextPipe,
    CutArrayPipe,
    LoaderComponent,
    ChartComponent,
    PieChartComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxChartsModule,
  ],
  exports: [NgxChartsModule],

  providers: [InvoiceService],
})
export class DashboardPageModule {}
