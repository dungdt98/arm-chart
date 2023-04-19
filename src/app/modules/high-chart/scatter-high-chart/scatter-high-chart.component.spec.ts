import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterHighChartComponent } from './scatter-high-chart.component';

describe('ScatterHighChartComponent', () => {
  let component: ScatterHighChartComponent;
  let fixture: ComponentFixture<ScatterHighChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatterHighChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScatterHighChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
