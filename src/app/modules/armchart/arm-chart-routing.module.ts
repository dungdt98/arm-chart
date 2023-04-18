import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';

const routes: Routes = [
  {
    path:'bar',
    component: BarChartComponent
  },
  {
    path:'pie',
    component: PieChartComponent
  },
  {
    path:'area',
    component: AreaChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArmChartRoutingModule { }
