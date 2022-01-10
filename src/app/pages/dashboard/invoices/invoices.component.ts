import { FilterComponent } from './../filter/filter.component';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceType } from './../../../types';
import { InvoiceService } from './../invoice.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit, OnDestroy {
  invoiceTypes = [
    {
      type: 0,
      text: 'incoming',
    },
    { type: 1, text: 'outcoming' },
  ];
  invoicePeriod = [
    {
      type: 0,
      text: 'daily',
    },
    { type: 1, text: 'weekly' },
    {
      type: 2,
      text: 'mounthly',
    },
    { type: 3, text: 'annually' },
  ];

  invoicesCount: number = 5;
  incoming: any[] = [];
  outcoming: any[] = [];
  sub?: Subscription;
  allInvoices?: Subscription;
  typeFilter = 2;
  pageEvent?: PageEvent;
  datasource?: null;
  pageIndex?: number;
  pageSize?: number;
  length?: number;
  isLoaded: boolean = false;

  invoices: InvoiceType[] = [];

  eventSelection(event: MatSelectChange) {
    this.typeFilter = event.value;
  }

  public getServerData(event?: PageEvent) {
    return event;
  }

  constructor(
    private invoicesService: InvoiceService,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: '450px',
      data: {
        invoicePeriod: this.invoicePeriod,
        invoiceTypes: this.invoiceTypes,
      },
    });

    dialogRef.afterClosed().subscribe((conditions) => {
      console.log('The dialog was closed', conditions);
      this.invoicesService.setConditions(conditions);
      this.invoicesService.getInvoicesPart(0, 4);
    });
  }

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
    this.allInvoices = this.invoicesService.getInvoices().subscribe((i) => {
      this.invoicesCount = i.length;

      this.incoming = i
        .filter((item: InvoiceType) => item.invoiceType === 0)
        .map((item: InvoiceType) => {
          return { value: item.amount, name: item.name, id: item.id };
        });

      this.outcoming = i
        .filter((item: InvoiceType) => item.invoiceType === 1)
        .map((item: InvoiceType) => {
          return { value: item.amount, name: item.name };
        });
    });
    // this.outcoming = i.filter((item) => item.invoiceType === 1);
    //   );

    this.sub = this.invoicesService.invoicesChange.subscribe((i) => {
      this.invoices = i;

      this.isLoaded = true;
    });
    this.invoicesService.getInvoicesPart(0, 4);
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
