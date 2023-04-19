import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHighChartComponent } from './dashboard-high-chart.component';

describe('DashboardHighChartComponent', () => {
  let component: DashboardHighChartComponent;
  let fixture: ComponentFixture<DashboardHighChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardHighChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHighChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
