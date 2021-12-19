import { invoicesStatisticsType } from './../types';
import { StatisticsService } from './../statistics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-blocks',
  templateUrl: './invoice-blocks.component.html',
  styleUrls: ['./invoice-blocks.component.scss'],
})
export class InvoiceBlocksComponent implements OnInit {
  statistics?: invoicesStatisticsType;
  constructor(private statisticsService: StatisticsService) {}
  getStatistics() {
    this.statisticsService.getStatistics().subscribe((t) => {
      this.statistics = t;
      console.log(t);
    });
  }
  ngOnInit(): void {
    this.getStatistics();
  }
}
