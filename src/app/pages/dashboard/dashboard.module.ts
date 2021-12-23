import { SummaryComponent } from '../../summary/summary.component';
import { InvoiceService } from './invoice.service';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranzactionsComponent } from './invoices/invoices.component';
import { InvoiceBlocksComponent } from './invoice-blocks/invoice-blocks.component';
import {
  DlDateTimeDateModule,
  DlDateTimePickerModule,
} from 'angular-bootstrap-datetimepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    TranzactionsComponent,
    InvoiceBlocksComponent,
    SummaryComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
  ],
  exports: [RouterModule],
  providers: [InvoiceService],
})
export class DashboardPageModule {}
