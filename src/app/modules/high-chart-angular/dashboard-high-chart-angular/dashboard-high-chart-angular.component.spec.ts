import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarHighChartAngularComponent } from './dashboard-high-chart-angular.component';

describe('DashboarHighChartAngularComponent', () => {
  let component: DashboarHighChartAngularComponent;
  let fixture: ComponentFixture<DashboarHighChartAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboarHighChartAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboarHighChartAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
