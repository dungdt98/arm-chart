import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmChartModule } from './modules/armchart/arm-chart.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArmChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
