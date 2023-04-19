import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart-angular',
  templateUrl: './line-chart-angular.component.html',
  styleUrls: ['./line-chart-angular.component.scss']
})
export class LineChartAngularComponent implements OnInit {
  @Input() index;
  Highcharts = Highcharts;
  linechart: any = {
    series: [
      {
        data: [
          43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157, 161454,
          154610, 154611,
        ],
      },
    ],
    chart: {
      type: 'line',
    },
    title: {
      text: 'linechart',
    },
  };
  ngOnInit(): void {}
}
