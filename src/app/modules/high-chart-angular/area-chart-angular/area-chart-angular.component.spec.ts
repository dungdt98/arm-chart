import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChartAngularComponent } from './area-chart-angular.component';

describe('AreaChartAngularComponent', () => {
  let component: AreaChartAngularComponent;
  let fixture: ComponentFixture<AreaChartAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaChartAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaChartAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
