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

@NgModule({
  declarations: [
    InvoicesComponent,
    InvoiceBlocksComponent,
    SummaryComponent,
    InvoiceDetailComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    ReactiveFormsModule,
    MaterialModule,
  ],

  providers: [InvoiceService],
})
export class DashboardPageModule {}
