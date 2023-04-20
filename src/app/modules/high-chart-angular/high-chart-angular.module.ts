import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighChartAngularRoutingModule } from './high-chart-angular-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { LineChartAngularComponent } from './line-chart-angular/line-chart-angular.component';
import { ColumnChartAngularComponent } from './column-chart-angular/column-chart-angular.component';
import { PieChartAngularComponent } from './pie-chart-angular/pie-chart-angular.component';
import { ScatterChartAngularComponent } from './scatter-chart-angular/scatter-chart-angular.component';
import { AreaChartAngularComponent } from './area-chart-angular/area-chart-angular.component';
import { DashboardHighChartAngularComponent } from './dashboard-high-chart-angular/dashboard-high-chart-angular.component';


@NgModule({
  declarations: [
    LineChartAngularComponent,
    DashboardHighChartAngularComponent,
    ColumnChartAngularComponent,
    PieChartAngularComponent,
    ScatterChartAngularComponent,
    AreaChartAngularComponent
  ],
  imports: [
    CommonModule,
    HighChartAngularRoutingModule,
    HighchartsChartModule
  ]
})
export class HighChartAngularModule { }
