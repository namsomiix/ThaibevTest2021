import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBarcodeComponent } from './display-barcode.component';

describe('DisplayBarcodeComponent', () => {
  let component: DisplayBarcodeComponent;
  let fixture: ComponentFixture<DisplayBarcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBarcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
