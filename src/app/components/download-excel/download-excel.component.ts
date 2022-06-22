import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeATK } from '../../models/employee-atk';
import { ExportExcelService } from '../../services/export-excel.service';

@Component({
  selector: 'app-download-excel',
  templateUrl: './download-excel.component.html',
  styleUrls: ['./download-excel.component.scss']
})
export class DownloadExcelComponent implements OnInit {

  public employeeATK: EmployeeATK[] = [];
  public dataForExcel = [];
  public dataExport: { classDate: string, courseName: string,trainingTypeName:string,classAttendanceDate:string, resultText:string,examScore:string}[] =[];

  constructor(
    private ExportExcelService: ExportExcelService,
    private EmployeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployeeATKList();
  }

  getEmployeeATKList() {
    this.EmployeeService.getEmployeeATKList().subscribe(
      (data: any) => {
        this.employeeATK = data;
        console.log(this.employeeATK);
      },
      (error) => {}
    );
  }

  downloadExcel(){
    this.dataForExcel = [];
    this.dataExport = [];
    // let headerData: string[] = [this.translate.instant("Label.CourseStartDate")
    // ,this.translate.instant("Label.Course")
    // ,this.translate.instant("Label.LearningHistoryCourseType")
    // ,this.translate.instant("Label.CourseCompletionDate")
    // ,this.translate.instant("Label.ExamResult")
    // ,this.translate.instant("Label.ExamScorePostTest")];

    let headerData: string[] = ['EmployeeId'];

    let reportData = {
      title: 'LearningHistory_' + new Date().getTime(),
      data: this.dataForExcel,
      headers: headerData
    }

    //this.ExportExcelService.learningHistoryExportExcel(reportData);
  }
}
