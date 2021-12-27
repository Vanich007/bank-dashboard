import { Observable } from 'rxjs';
import { InvoiceType } from '../../../types';
import { InvoiceService } from './../invoice.service';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// import {
//   MatDialog,
//   MatDialogRef,
//   MAT_DIALOG_DATA,
// } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
// @Component({
//   selector: 'dialog-overview-example',
//   template:
//     '<button mat-raised-button (click)="openDialog()">Pick one</button>',
//   styles: [''],
// })
// export class DialogOverviewExample {
//   constructor(public dialog: MatDialog) {}

//   openDialog(): void {
//     const dialogRef = this.dialog.open(InvoiceDetailComponent, {
//       width: '250px',
//       // data: { name: this.name, animal: this.animal },
//       data: {},
//     });

//     dialogRef.afterClosed().subscribe((result) => {
//       console.log('The dialog was closed');
//       // this.animal = result;
//     });
//   }
// }

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss'],
})
export class InvoiceDetailComponent implements OnInit {
  isNewInvoice: boolean = false;
  // submitted = false;
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*[.,]?[0-9]+$'),
      ]),
      invoiceType: new FormControl(),
      period: new FormControl(),
      date: new FormControl('', Validators.required),
      id: new FormControl(''),
    });

    this.getInvoice();
  }

  onSubmit() {
    // this.submitted = true;
    this.save();
  }
  // showFormControls(form: any) {
  //   return form && form.controls.invoiceType && form.controls.invoiceType.value; // Dr. IQ
  // }

  invoice: InvoiceType = {
    id: 0,
    amount: 0,
    date: new Date(),
    name: '',
    invoiceType: 1,
    period: 0,
  };

  constructor(
    // public dialogRef: MatDialogRef<InvoiceDetailComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
    private location: Location
  ) {}
  getInvoice(): void {
    const stringId = this.route.snapshot.paramMap.get('id');
    if (stringId === 'new') {
      this.isNewInvoice = true;
    }
    const id = Number(stringId);
    this.invoiceService.getInvoice(id).subscribe((i) => {
      this.form.patchValue(i);
      // this.invoice = i;
      console.log(i);
    });
  }
  goBack(): void {
    this.location.back();
  }
  reset(): void {
    this.form.reset();
  }
  save(): void {
    if (!this.isNewInvoice) {
      this.invoiceService.updateInvoice(this.form.value).subscribe(() => {
        this.goBack();
      });
    } else this.cloneInvoice();
  }
  cloneInvoice(): void {
    let tempInvoice = { ...this.form.value } as any;
    delete tempInvoice.id;
    this.invoiceService.addInvoice(tempInvoice).subscribe(() => this.goBack());
  }
  deleteInvoice(): void {
    if (this.form.value.id)
      this.invoiceService
        .deleteInvoice(this.form.value.id)
        .subscribe(() => console.log('deleted'));
  }
  newInvoice() {
    // this.invoice = new InvoiceType(42, '', '');
  }

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
}
