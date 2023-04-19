import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterChartAngularComponent } from './scatter-chart-angular.component';

describe('ScatterChartAngularComponent', () => {
  let component: ScatterChartAngularComponent;
  let fixture: ComponentFixture<ScatterChartAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatterChartAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScatterChartAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
