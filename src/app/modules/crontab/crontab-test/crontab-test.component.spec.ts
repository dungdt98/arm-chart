import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrontabTestComponent } from './crontab-test.component';

describe('CrontabTestComponent', () => {
  let component: CrontabTestComponent;
  let fixture: ComponentFixture<CrontabTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrontabTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrontabTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
