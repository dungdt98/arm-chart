import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrontabRoutingModule } from './crontab-routing.module';
import { CrontabTestComponent } from './crontab-test/crontab-test.component';


@NgModule({
  declarations: [
    CrontabTestComponent
  ],
  imports: [
    CommonModule,
    CrontabRoutingModule
  ]
})
export class CrontabModule { }
