import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagementModalComponent } from './employee-management-modal.component';

describe('EmployeeManagementModalComponent', () => {
  let component: EmployeeManagementModalComponent;
  let fixture: ComponentFixture<EmployeeManagementModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeManagementModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeManagementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
