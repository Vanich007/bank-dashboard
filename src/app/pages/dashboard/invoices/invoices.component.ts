import { InvoiceService } from './../invoice.service';
import { InvoiceType } from '../../../types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit {
  invoices?: InvoiceType[];
  constructor(private invoicesService: InvoiceService) {}
  getTransactions() {
    // this.invoicesService.getInvoices().subscribe((t) => {
    //   this.invoices = t;    });
    this.invoicesService.getInvoices();
    this.invoicesService.invoicesChange.subscribe((i) => (this.invoices = i));
  }
  ngOnInit(): void {
    this.getTransactions();
  }
}
