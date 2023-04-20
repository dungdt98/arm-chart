import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart-angular',
  templateUrl: './line-chart-angular.component.html',
  styleUrls: ['./line-chart-angular.component.scss']
})
export class LineChartAngularComponent implements OnInit {
  @Input() index;
  dataFake = [
    43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157, 161454,
    154610, 154611,
  ];
  Highcharts = Highcharts;
  options: any = {
    series: [
      {
        data: this.generateData(),
      },
    ],
    chart: {
      type: 'line',
    },
    title: {
      text: 'Line Chart',
    },
  };
  ngOnInit(): void {}

  generateData() {
    let data = [];
    for(let i = 0; i < 10000; i ++ ){
      data.push(Math.floor(Math.random() * 1001));
    }
    return data;
  }
}
