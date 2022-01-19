import { InvoiceService } from './../invoice.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  InvoiceEnumPeriod,
  InvoiceEnumType,
  InvoiceType,
} from './../../../types';

export type InvoiceCopyType = {
  id?: number;
  date: Date;
  amount: number;
  name: string;
  invoiceType: number;
  period: InvoiceEnumPeriod;
};

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss'],
})
export class InvoiceDetailComponent implements OnInit, OnDestroy {
  thisInvoiceEnumPeriod = InvoiceEnumPeriod;
  thisInvoiceEnumType = InvoiceEnumType;
  // myInvoiceEnumPeriod: Array<string> = Object.keys(InvoiceEnumPeriod).filter(
  //   (key) => isNaN(+key)
  // );
  isLoaded: boolean = false;
  sub?: Subscription;
  isNewInvoice: boolean = false;
  // submitted = false;
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

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
    this.save();
  }

  invoice: InvoiceType = {
    id: 0,
    amount: 0,
    date: new Date(),
    name: '',
    invoiceType: InvoiceEnumType.incoming,
    period: InvoiceEnumPeriod.mounthly,
  };

  constructor(
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
    this.sub = this.invoiceService.getInvoice(id).subscribe((i) => {
      this.form.patchValue(i);
      this.isLoaded = true;
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
      this.sub = this.invoiceService
        .updateInvoice(this.form.value)
        .subscribe(() => {
          this.goBack();
        });
    } else this.cloneInvoice();
  }
  cloneInvoice(): void {
    let tempInvoice = { ...this.form.value } as InvoiceCopyType;
    delete tempInvoice.id;
    this.sub = this.invoiceService
      .addInvoice(tempInvoice)
      .subscribe(() => this.goBack());
  }
  deleteInvoice(): void {
    if (this.form.value.id)
      this.invoiceService.deleteInvoice(this.form.value.id);
  }
  newInvoice() {}

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
