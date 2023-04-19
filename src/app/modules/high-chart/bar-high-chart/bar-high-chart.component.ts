import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar-high-chart',
  templateUrl: './bar-high-chart.component.html',
  styleUrls: ['./bar-high-chart.component.scss']
})
export class BarHighChartComponent implements OnInit, AfterViewInit{
  @Input() index;
  id;
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.initChart(dataFake);
  }

  initChart(data: any) {
    this.id = 'container' + this.index;
    Highcharts.chart('container' as any, {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Column Chart' + this.index,
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
      series: [{
        name: 'Country',
        data,
      }],
    } as any);
  }
}

export const dataFake: any[] = [
  {
    name: 'China',
    y: 1882,
  },
  {
    name: 'Japan',
    y: 1809,
  },
  {
    name: 'Germany',
    y: 1322,
  },
  {
    name: 'UK',
    y: 1122,
  },
  {
    name: 'France',
    y: 1114,
  },
  {
    name: 'India',
    y: 984,
  },
  {
    name: 'Spain',
    y: 711,
  },
  {
    name: 'Netherlands',
    y: 665,
  },
  {
    name: 'South Korea',
    y: 443,
  },
  {
    name: 'Canada',
    y: 441,
  },
];
