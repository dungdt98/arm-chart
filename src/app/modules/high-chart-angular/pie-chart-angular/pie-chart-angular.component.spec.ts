import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartAngularComponent } from './pie-chart-angular.component';

describe('PieChartAngularComponent', () => {
  let component: PieChartAngularComponent;
  let fixture: ComponentFixture<PieChartAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
