import { ReactiveFormsModule } from '@angular/forms';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { SummaryComponent } from '../../summary/summary.component';
import { InvoiceService } from './invoice.service';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceBlocksComponent } from './invoice-blocks/invoice-blocks.component';
import {
  DlDateTimeDateModule,
  DlDateTimePickerModule,
} from 'angular-bootstrap-datetimepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
  ],
  exports: [RouterModule],
  providers: [InvoiceService],
})
export class DashboardPageModule {}
