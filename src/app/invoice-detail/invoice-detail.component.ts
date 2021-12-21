import { InvoiceEnumType, InvoiceEnumPeriod, InvoiceType } from './../types';
import { InvoiceService } from './../invoice.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss'],
})
export class InvoiceDetailComponent implements OnInit {
  invoice: InvoiceType = {
    id: 0,
    amount: 0,
    date: new Date(),
    name: '',
    type: InvoiceEnumType.outcoming,
    period: InvoiceEnumPeriod.mounthly,
  };
  constructor(
    private route: ActivatedRoute,
    private heroService: InvoiceService,
    private location: Location
  ) {}
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getInvoice(id).subscribe((hero) => (this.invoice = hero));
  }
  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {
    this.getHero();
  }
  save(): void {
    if (this.invoice) {
      this.heroService
        .updateInvoice(this.invoice)
        .subscribe(() => this.goBack());
    }
  }
}
