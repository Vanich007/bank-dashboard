import { InvoiceType } from './../../../types';
import { invoicesStatisticsType } from '../../../types';

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invoice-blocks',
  templateUrl: './invoice-blocks.component.html',
  styleUrls: ['./invoice-blocks.component.scss'],
})
export class InvoiceBlocksComponent implements OnInit, OnDestroy {
  @Input() mounthlyDifference: number = 0;
  @Input() incomeInvoices: number = 0;
  @Input() outcomeInvoices: number = 0;
  constructor() {}

  ngOnInit(): void {}
  ngOnDestroy() {}
}
