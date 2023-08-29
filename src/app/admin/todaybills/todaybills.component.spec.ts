import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaybillsComponent } from './todaybills.component';

describe('TodaybillsComponent', () => {
  let component: TodaybillsComponent;
  let fixture: ComponentFixture<TodaybillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaybillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaybillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
