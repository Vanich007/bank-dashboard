import { InvoiceService } from './../invoice.service';
import { InvoiceType } from '../../../types';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit {
  pageEvent?: PageEvent;
  datasource?: null;
  pageIndex?: number;
  pageSize?: number;
  length?: number;

  invoices?: InvoiceType[];

  public getServerData(event?: PageEvent) {
    console.log(event);
    // this.invoicesService.getdata(event).subscribe((response: any) => {
    //   {
    //     this.datasource = response.data;
    //     this.pageIndex = response.pageIndex;
    //     this.pageSize = response.pageSize;
    //     this.length = response.length;
    //   }
    // });
    return event;
  }

  constructor(private invoicesService: InvoiceService) {}
  getTransactions(event: PageEvent) {
    // this.invoicesService.getInvoices().subscribe((t) => {
    //   this.invoices = t;    });
    this.invoicesService.getInvoicesPart(
      event?.pageIndex * event?.pageSize,
      event?.pageSize
    );
    return event;
  }
  ngOnInit(): void {
    this.invoicesService.invoicesChange.subscribe((i) => (this.invoices = i));
    this.invoicesService.getInvoicesPart(0, 4);
  }
}
