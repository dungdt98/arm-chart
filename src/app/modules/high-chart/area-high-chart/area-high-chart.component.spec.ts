import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaHighChartComponent } from './area-high-chart.component';

describe('AreaHighChartComponent', () => {
  let component: AreaHighChartComponent;
  let fixture: ComponentFixture<AreaHighChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaHighChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaHighChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
