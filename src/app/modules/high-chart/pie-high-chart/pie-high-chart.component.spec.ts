import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieHighChartComponent } from './pie-high-chart.component';

describe('PieHighChartComponent', () => {
  let component: PieHighChartComponent;
  let fixture: ComponentFixture<PieHighChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieHighChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieHighChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
