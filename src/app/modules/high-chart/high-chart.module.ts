import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighChartRoutingModule } from './high-chart-routing.module';
import { AreaHighChartComponent } from './area-high-chart/area-high-chart.component';
import { ChartModule } from 'angular-highcharts';
import { BarHighChartComponent } from './bar-high-chart/bar-high-chart.component';
import { ScatterHighChartComponent } from './scatter-high-chart/scatter-high-chart.component';
import { LineHighChartComponent } from './line-high-chart/line-high-chart.component';
import { DashboardHighChartComponent } from './dashboard-high-chart/dashboard-high-chart.component';
import { PieHighChartComponent } from './pie-high-chart/pie-high-chart.component';

@NgModule({
  declarations: [
    AreaHighChartComponent,
    BarHighChartComponent,
    ScatterHighChartComponent,
    LineHighChartComponent,
    DashboardHighChartComponent,
    PieHighChartComponent
  ],
  imports: [
    CommonModule,
    HighChartRoutingModule,
    ChartModule
  ]
})
export class HighChartModule { }
