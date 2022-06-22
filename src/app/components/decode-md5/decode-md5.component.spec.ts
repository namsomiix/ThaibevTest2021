import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecodeMd5Component } from './decode-md5.component';

describe('DecodeMd5Component', () => {
  let component: DecodeMd5Component;
  let fixture: ComponentFixture<DecodeMd5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecodeMd5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecodeMd5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
