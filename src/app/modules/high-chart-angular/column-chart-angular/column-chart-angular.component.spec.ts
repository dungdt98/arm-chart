import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnChartAngularComponent } from './column-chart-angular.component';

describe('ColumnChartAngularComponent', () => {
  let component: ColumnChartAngularComponent;
  let fixture: ComponentFixture<ColumnChartAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnChartAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnChartAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
