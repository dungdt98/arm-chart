import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-high-chart',
  templateUrl: './pie-high-chart.component.html',
  styleUrls: ['./pie-high-chart.component.scss'],
})
export class PieHighChartComponent implements OnInit, AfterViewInit {
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
    Highcharts.chart(this.id, {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Pie' + this.index,
        align: 'left',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      // plotOptions: {
      //   pie: {
      //     allowPointSelect: true,
      //     cursor: 'pointer',
      //     dataLabels: {
      //       enabled: true,
      //       format: '<b>{point.name}</b>: {point.percentage:.1f} %',
      //     },
      //   },
      // },
      series: [
        {
          name: 'Brands',
          colorByPoint: true,
          data: data,
        },
      ],
    } as any);
  }
}

export const data = [
  {
    name: 'Chrome',
    y: 70.67,
  },
  {
    name: 'Edge',
    y: 14.77,
  },
  {
    name: 'Firefox',
    y: 4.86,
  },
  {
    name: 'Safari',
    y: 2.63,
  },
  {
    name: 'Internet Explorer',
    y: 1.53,
  },
  {
    name: 'Opera',
    y: 1.4,
  },
  {
    name: 'Sogou Explorer',
    y: 0.84,
  },
  {
    name: 'QQ',
    y: 0.51,
  },
  {
    name: 'Other',
    y: 2.6,
  },
]
