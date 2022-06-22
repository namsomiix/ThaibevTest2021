import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMailComponent } from './api-mail.component';

describe('ApiMailComponent', () => {
  let component: ApiMailComponent;
  let fixture: ComponentFixture<ApiMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
