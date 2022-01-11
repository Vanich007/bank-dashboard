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
  mounthlyIncome = 0;
  mounthlyOutcome = 0;
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
      this.invoicesService.setConditions(conditions);
      this.invoicesService.getInvoicesPart(0, 4);
      this.allInvoices = this.invoicesService.getInvoices().subscribe((i) => {
        this.invoicesCount = i.length;
      });
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
      console.log('invoicesCount changed');

      this.mounthlyIncome = 0;
      this.incoming = i
        .filter((item: InvoiceType) => item.invoiceType === 0)
        .map((item: InvoiceType) => {
          let coefficient;
          switch (item.period) {
            case 0:
              coefficient = 365;
              break;
            case 1:
              coefficient = 56;
              break;
            case 2:
              coefficient = 12;
              break;

            default:
              coefficient = 1;
              break;
          }
          this.mounthlyIncome += Math.round((item.amount * coefficient) / 12);
          return {
            value: item.amount * coefficient,
            name: item.name,
            id: item.id,
          };
        });

      this.mounthlyOutcome = 0;
      this.outcoming = i
        .filter((item: InvoiceType) => item.invoiceType === 1)
        .map((item: InvoiceType) => {
          let coefficient;
          switch (item.period) {
            case 0:
              coefficient = 365;
              break;
            case 1:
              coefficient = 56;
              break;
            case 2:
              coefficient = 12;
              break;

            default:
              coefficient = 1;
              break;
          }
          this.mounthlyOutcome += Math.round((item.amount * coefficient) / 12);
          return {
            value: item.amount * coefficient,
            name: item.name,
            id: item.id,
          };
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
