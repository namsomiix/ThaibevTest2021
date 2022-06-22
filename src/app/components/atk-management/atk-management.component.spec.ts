import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtkManagementComponent } from './atk-management.component';

describe('AtkManagementComponent', () => {
  let component: AtkManagementComponent;
  let fixture: ComponentFixture<AtkManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtkManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtkManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
