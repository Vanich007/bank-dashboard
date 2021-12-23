import {
  InvoiceEnumType,
  InvoiceEnumPeriod,
  InvoiceType,
} from '../../../types';
import { InvoiceService } from './../invoice.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss'],
})
export class InvoiceDetailComponent implements OnInit {
  submitted = false;
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
    });

    this.getInvoice();
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

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  showFormControls(form: any) {
    return form && form.controls.invoiceType && form.controls.invoiceType.value; // Dr. IQ
  }

  invoice: InvoiceType = {
    id: 0,
    amount: 0,
    date: new Date(),
    name: '',
    type: 1,
    period: InvoiceEnumPeriod.mounthly,
  };
  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
    private location: Location
  ) {}
  getInvoice(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.invoiceService.getInvoice(id).subscribe((i) => {
      this.invoice = i;
      console.log(i);
    });
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.invoice) {
      this.invoiceService
        .updateInvoice(this.invoice)
        .subscribe(() => this.goBack());
    }
  }
  newInvoice() {
    // this.invoice = new InvoiceType(42, '', '');
  }
}
