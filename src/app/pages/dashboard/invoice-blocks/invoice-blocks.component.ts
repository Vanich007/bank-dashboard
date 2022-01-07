import { invoicesStatisticsType } from '../../../types';
import { StatisticsService } from './../statistics.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invoice-blocks',
  templateUrl: './invoice-blocks.component.html',
  styleUrls: ['./invoice-blocks.component.scss'],
})
export class InvoiceBlocksComponent implements OnInit, OnDestroy {
  sub?: Subscription;
  statistics?: invoicesStatisticsType;
  constructor(private statisticsService: StatisticsService) {}
  getStatistics() {
    this.sub = this.statisticsService.getStatistics().subscribe((t) => {
      this.statistics = t;
    });
  }
  ngOnInit(): void {
    this.getStatistics();
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
