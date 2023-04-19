import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-high-chart',
  templateUrl: './line-high-chart.component.html',
  styleUrls: ['./line-high-chart.component.scss'],
})
export class LineHighChartComponent implements OnInit, AfterViewInit {
  @Input() index;
  id;
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.initChart(data);
  }

  initChart(data: any) {
    this.id = 'container' + this.index;
    Highcharts.chart(
      'container' as any,
      {
        chart: {
          type: 'line',
        },
        title: {
          text: 'Line Chart' + this.index,
        },
        credits: {
          enabled: false,
        },
        legend: {
          enabled: false,
        },
        yAxis: {
          min: 441,
          title: undefined,
        },
        xAxis: {
          type: 'category',
          //   categories: [
          //     'Jan',
          //     'Feb',
          //     'Mar',
          //     'Apr',
          //     'May',
          //     'Jun',
          //     'Jul',
          //     'Aug',
          //     'Sep',
          //     'Oct',
          //     'Nov',
          //     'Dec'
          // ],
        },
        tooltip: {
          headerFormat: `<div></div>`,
          pointFormat: `<div>{series.name}: {point.y}</div>`,
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true,
            },
          },
        },
        series: [
          {
            name: 'Country',
            data,
          },
        ],
      } as any
    );
  }
}

export const data = [
  ['China', 43934],
  ['Japan', 48656],
  ['Germany', 65165],
  ['UK', 81827],
  ['France', 112143],
  ['India', 142383],
  ['Spain', 171533],
  ['Netherlands', 165174],
  ['South Korea', 155157],
  ['Canada', 154610],
];

export const data2 = [
  43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157, 161454,
  154610, 154611,
];
