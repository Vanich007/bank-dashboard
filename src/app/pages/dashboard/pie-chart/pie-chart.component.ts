import { StatisticType } from './../invoices/invoices.component';
import { Component, Input, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  public legendPosition: LegendPosition = LegendPosition.Below;
  @Input() type: string = '';
  @Input() data: StatisticType[] = [];
  view: [number, number] = [500, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  //legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor() {}

  onSelect(data: StatisticType): void {
    console.log('Selected ', data.name, data.value);
  }
}
