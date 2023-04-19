import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArmChartRoutingModule } from './arm-chart-routing.module';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DashboardArmChartComponent } from './dashboard-arm-chart/dashboard-arm-chart.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { BarChartComponent } from './bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    AreaChartComponent,
    PieChartComponent,
    DashboardArmChartComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    ArmChartRoutingModule
  ],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
})
export class ArmChartModule { }
