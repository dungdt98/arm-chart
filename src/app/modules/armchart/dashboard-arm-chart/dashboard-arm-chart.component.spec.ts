import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardArmChartComponent } from './dashboard-arm-chart.component';

describe('DashboardArmChartComponent', () => {
  let component: DashboardArmChartComponent;
  let fixture: ComponentFixture<DashboardArmChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardArmChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardArmChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
