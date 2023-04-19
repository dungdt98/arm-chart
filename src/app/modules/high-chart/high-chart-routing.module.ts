import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaHighChartComponent } from './area-high-chart/area-high-chart.component';
import { ScatterHighChartComponent } from './scatter-high-chart/scatter-high-chart.component';
import { BarHighChartComponent } from './bar-high-chart/bar-high-chart.component';
import { LineHighChartComponent } from './line-high-chart/line-high-chart.component';
import { PieHighChartComponent } from './pie-high-chart/pie-high-chart.component';

const routes: Routes = [
  {path: 'area', component: AreaHighChartComponent},
  {path: 'scatter', component: ScatterHighChartComponent},
  {path: 'bar', component: BarHighChartComponent},
  {path: 'line', component: LineHighChartComponent},
  {path: 'pie', component: PieHighChartComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighChartRoutingModule { }
