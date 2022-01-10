import { InvoiceType } from './../../../types';
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
  invoiceTypes: any[] = [];
  invoicePeriod: any[] = [];
  ngOnInit(): void {
    console.log(this.data);
  }
  constructor(
    public dialogRef: MatDialogRef<FilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  toggleInvoiceTypes(checkbox: MatCheckbox) {
    let { checked, value } = checkbox;
    console.log(checked, value);
    if (checked === false)
      this.invoiceTypes = this.invoiceTypes.filter((i) => i.type !== +value);
    else
      this.invoiceTypes.indexOf(+value) === -1
        ? this.invoiceTypes.push(+value)
        : null;
  }
  toggleInvoicePeriod(checkbox: MatCheckbox) {
    let { checked, value } = checkbox;
    console.log(checked, value);
    if (checked === false)
      this.invoicePeriod = this.invoicePeriod.filter((i) => i.type !== +value);
    else
      this.invoicePeriod.indexOf(+value) === -1
        ? this.invoicePeriod.push(+value)
        : null;
  }
}
