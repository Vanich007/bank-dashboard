import { InvoiceCopyType } from './invoice-detail/invoice-detail.component';
import { BaseApi } from './../../core/base-api';
import { InvoiceType } from './../../types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

type setCondishionsType = {
  selectedInvoiceTypes: Array<number>;
  selectedInvoicePeriod: Array<number>;
};

@Injectable({
  providedIn: 'root',
})
export class InvoiceService extends BaseApi {
  private invoices?: InvoiceType[];
  invoicesChange = new Subject<InvoiceType[]>();
  invoiceUrl = 'invoices';
  conditions: string = '';
  searchConditions: string = '';
  constructor(public override http: HttpClient) {
    super(http);
  }

  setSearchConditions(value: string) {
    debugger;
    this.searchConditions = `&q=${value}`;
  }

  setConditions(conditions: setCondishionsType): void {
    let strConditions = '';
    if (conditions.selectedInvoiceTypes)
      for (let s = 0; s < conditions.selectedInvoiceTypes.length; s++) {
        strConditions =
          strConditions + `&invoiceType=${conditions.selectedInvoiceTypes[s]}`;
      }

    if (conditions.selectedInvoicePeriod)
      for (let s = 0; s < conditions.selectedInvoicePeriod.length; s++) {
        strConditions =
          strConditions + `&period=${conditions.selectedInvoicePeriod[s]}`;
      }
    this.conditions = strConditions;
  }

  getInvoices(): Observable<Array<InvoiceType>> {
    return this.get(
      `${this.invoiceUrl}${this.conditions.replace('&', '?')}${
        this.searchConditions
      }`
    );
    //  .subscribe((i) => {
    //     this.invoices = [...i];
    //     this.invoicesChange.next(this.invoices);
    // });
  }

  getInvoicesPart(start: number = 0, limit: number = 10): void {
    this.get(
      `${this.invoiceUrl}?_start=${start}&_limit=${limit}${this.conditions}${this.searchConditions}`
    ).subscribe((i) => {
      this.invoices = [...i];
      this.invoicesChange.next(this.invoices);
    });
  }

  getInvoice(id: number): Observable<InvoiceType> {
    const url = `${this.invoiceUrl}/${id}`;
    return this.get(url);
  }

  searchInvoices(term: string): void {
    if (!term.trim()) {
      this.invoices = [];
    }
    this.get(`${this.invoiceUrl}?q=${term}`).subscribe((i) => {
      this.invoices = [...i];
      this.invoicesChange.next(this.invoices);
    });
  }

  addInvoice(invoice: InvoiceCopyType): Observable<InvoiceType> {
    return this.post(this.invoiceUrl, invoice);
  }

  deleteInvoice(id: number): Observable<InvoiceType> {
    const url = `${this.invoiceUrl}/${id}`;
    return this.delete(url);
  }

  updateInvoice(invoice: InvoiceCopyType): Observable<InvoiceType> {
    return this.patch(`${this.invoiceUrl}/${invoice.id}`, invoice);
  }
}
