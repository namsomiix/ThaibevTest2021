import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCsvExcelComponent } from './import-csv-excel.component';

describe('ImportCsvExcelComponent', () => {
  let component: ImportCsvExcelComponent;
  let fixture: ComponentFixture<ImportCsvExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportCsvExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportCsvExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
