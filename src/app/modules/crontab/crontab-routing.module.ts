import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrontabTestComponent } from './crontab-test/crontab-test.component';

const routes: Routes = [
  {path: '', component: CrontabTestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrontabRoutingModule { }
