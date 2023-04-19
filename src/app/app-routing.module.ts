import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHighChartComponent } from './modules/high-chart/dashboard-high-chart/dashboard-high-chart.component';
import { DashboardArmChartComponent } from './modules/armchart/dashboard-arm-chart/dashboard-arm-chart.component';

const routes: Routes = [
  {
    path: 'arm-chart',
    component: DashboardArmChartComponent,
    loadChildren: () =>
      import('../app/modules/armchart/arm-chart.module').then(
        (m) => m.ArmChartModule
      ),
  },
  {
    path: 'high-chart',
    component: DashboardHighChartComponent,
    loadChildren: () =>
      import('../app/modules/high-chart/high-chart.module').then(
        (m) => m.HighChartModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
