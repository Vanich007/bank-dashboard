import { InvoiceType, InvoiceDir } from './../../../types';
import { Component, Inject, OnInit } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  invoiceTypes: InvoiceDir[] = [];
  invoicePeriod: InvoiceDir[] = [];
  selectedInvoiceTypes: number[] = [];
  selectedInvoicePeriod: number[] = [];
  ngOnInit(): void {
    this.data;
  }
  constructor(
    public dialogRef: MatDialogRef<FilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  toggleInvoiceTypes(checkbox: MatCheckbox) {
    let { checked, value }: { checked: boolean; value: string } = checkbox;
    if (checked === false)
      this.selectedInvoiceTypes = this.selectedInvoiceTypes.filter(
        (i) => i !== +value
      );
    else
      this.selectedInvoiceTypes.indexOf(+value) === -1
        ? this.selectedInvoiceTypes.push(+value)
        : null;
  }
  toggleInvoicePeriod(checkbox: MatCheckbox) {
    let { checked, value } = checkbox;
    if (checked === false)
      this.selectedInvoicePeriod = this.selectedInvoicePeriod.filter(
        (i) => i !== +value
      );
    else
      this.selectedInvoicePeriod.indexOf(+value) === -1
        ? this.selectedInvoicePeriod.push(+value)
        : null;
  }
}
