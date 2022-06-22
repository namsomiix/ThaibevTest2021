import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
// import { Workbook } from 'exceljs';
// import * as fs from 'file-saver';
// import * as Excel from 'exceljs/dist/exceljs.min.js'
const EXCEL_EXTENSION = '.xlsx';
const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

@Injectable({
  providedIn: 'root'
})
export class ExportExcelService {

  constructor() { }
  employee = [
    { name: 'Shyam', email: 'shyamjaiswal@gmail.com' },
    { name: 'Bob', email: 'bob32@gmail.com' },
    { name: 'Jai', email: 'jai87@gmail.com' },
  ];

  exportToExcel(excelData) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(excelData);
    const workbook: XLSX.WorkBook = {
      Sheets: { Sheet1: worksheet },
      SheetNames: ['Sheet1'],
    };

    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    const data: Blob = new Blob([excelBuffer], { type: EXCEL_TYPE });
    const date = new Date();
    const fileName = 'Export_'+new Date().getTime()+'.xlsx';

    FileSaver.saveAs(data, fileName);
  }

  public exportAsExcelFile( excelFileName: string): void {
    
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.employee);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],

    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );

  }

  learningHistoryExportExcel(excelData) {

    //Title, Header & Data
    const title = excelData.title;
    const header = excelData.headers
    const data = excelData.data;

    //Create a workbook with a worksheet
    // let workbook = new Workbook();
    // let worksheet = workbook.addWorksheet('Learning History');

    // //Adding Header Row
    // let headerRow = worksheet.addRow(header);
    // headerRow.eachCell((cell, number) => {
    //   cell.fill = {
    //     type: 'pattern',
    //     pattern: 'solid',
    //     fgColor: { argb: '00722E' },
    //     bgColor: { argb: '' }
    //   }
    //   cell.font = {
    //     bold: true,
    //     color: { argb: 'FFFFFF' },
    //     size: 12
    //   }
    // })
    
    // data.forEach(d => {
    //   let row = worksheet.addRow(d);
    // });

    // worksheet.getColumn(3).width = 20;
    // worksheet.addRow([]);

    // //Generate & Save Excel File
    // workbook.xlsx.writeBuffer().then((data) => {
    //   let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    //   fs.saveAs(blob, title + '.xlsx');
    // })

  }
}
