import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincurdComponent } from './admincurd.component';

describe('AdmincurdComponent', () => {
  let component: AdmincurdComponent;
  let fixture: ComponentFixture<AdmincurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincurdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
