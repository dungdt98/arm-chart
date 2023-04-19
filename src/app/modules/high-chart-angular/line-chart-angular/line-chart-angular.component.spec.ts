import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartAngularComponent } from './line-chart-angular.component';

describe('LineChartAngularComponent', () => {
  let component: LineChartAngularComponent;
  let fixture: ComponentFixture<LineChartAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
