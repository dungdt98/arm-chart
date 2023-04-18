import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArmChartRoutingModule } from './arm-chart-routing.module';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    AreaChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    ArmChartRoutingModule
  ]
})
export class ArmChartModule { }
