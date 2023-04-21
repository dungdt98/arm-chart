import { DashboardHighChartAngularComponent } from './modules/high-chart-angular/dashboard-high-chart-angular/dashboard-high-chart-angular.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHighChartComponent } from './modules/high-chart/dashboard-high-chart/dashboard-high-chart.component';
import { DashboardArmChartComponent } from './modules/armchart/dashboard-arm-chart/dashboard-arm-chart.component';
import { AppComponent } from './app.component';
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
  {
    path: 'high-chart-angular',
    component: DashboardHighChartAngularComponent,
    loadChildren: () =>
      import('../app/modules/high-chart-angular/high-chart-angular.module').then(
        (m) => m.HighChartAngularModule
      ),
  },
  {
    path: 'crontab',
    component: AppComponent,
    loadChildren: () =>
      import('../app/modules/crontab/crontab.module').then(
        (m) => m.CrontabModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
