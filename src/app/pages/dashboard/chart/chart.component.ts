import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  //single?: any[];
  multi?: any[];

  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  @Input() data = [
    {
      name: 'Q1',
      series: [
        {
          name: '1001',
          value: -10632,
        },
        {
          name: '2001',
          value: -36953,
        },
      ],
    },
    {
      name: 'Q2',
      series: [
        {
          name: '1001',
          value: -19737,
        },
        {
          name: '2001',
          value: 45986,
        },
      ],
    },
    {
      name: 'Q3',
      series: [
        {
          name: '1001',
          value: -16745,
        },
        {
          name: '2001',
          value: 0,
        },
      ],
    },
    {
      name: 'Q4',
      series: [
        {
          name: '1001',
          value: -16240,
        },
        {
          name: '2001',
          value: 32543,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  onSelect(event: any) {
    console.log(event);
  }
}
