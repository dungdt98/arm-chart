import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineHighChartComponent } from './line-high-chart.component';

describe('LineHighChartComponent', () => {
  let component: LineHighChartComponent;
  let fixture: ComponentFixture<LineHighChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineHighChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineHighChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
