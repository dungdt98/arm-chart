import { data3 } from './../../armchart/data';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area-high-chart',
  templateUrl: './area-high-chart.component.html',
  styleUrls: ['./area-high-chart.component.scss']
})
export class AreaHighChartComponent implements OnInit, AfterViewInit{
  @Input() index;
  id;
  ngOnInit(): void {
    this.initChart();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.initChart();
  }

  initChart() {
    this.id = 'container' + this.index;
    Highcharts.chart('container', {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Area chart' + this.index
      },
      xAxis: {
          allowDecimals: false,
          labels: {
              formatter: function () {
                  return this.value; // clean, unformatted number for year
              }
          },
      },
      yAxis: {
          title: {
              text: ''
          }
      },
      tooltip: {
          pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
      },
      plotOptions: {
          area: {
              pointStart: Number(data3[0].year),
              marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2,
                  states: {
                      hover: {
                          enabled: true
                      }
                  }
              }
          }
      },
      series: [{
          name: 'USA',
          data: dataFake
      }]
    } as any);
  }
}

export const data = [
  null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
  1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540,
  28133, 29463, 31139, 31175, 31255, 29561, 27552, 26008, 25830,
  26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
  23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
  21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
  10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
  5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
  3750, 3708, 3708
]

export const dataFake = data3.map(item => item.bicycles)
