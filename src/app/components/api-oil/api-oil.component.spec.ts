import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiOilComponent } from './api-oil.component';

describe('ApiOilComponent', () => {
  let component: ApiOilComponent;
  let fixture: ComponentFixture<ApiOilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiOilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
