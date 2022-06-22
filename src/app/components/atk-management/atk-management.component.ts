import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Course } from '../../models/course';
import { EmployeeATK } from '../../models/employee-atk';

@Component({
  selector: 'app-atk-management',
  templateUrl: './atk-management.component.html',
  styleUrls: ['./atk-management.component.scss']
})
export class AtkManagementComponent implements OnInit {

  
  public course: Course[] = [];
  public employeeATK: EmployeeATK[] = [];
  public employeeATKWaitingList: EmployeeATK[] = [];
  public isShown:boolean=false;

  constructor(private EmployeeService: EmployeeService){}

  ngOnInit(): void {
    console.log('atk-management');
    this.fetchData();
  }
  fetchData(): void {
    this.getEmployeeATKList();
    this.getEmployeeATKWaitingList();
  }

  getCourseList(event: string = '') {
    this.EmployeeService.getCourseList('').subscribe(
      (data: any) => {
        this.course = JSON.parse(data);
        console.log(this.course);
      },
      (error) => {

      }
    );
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

  getEmployeeATKWaitingList() {
    this.EmployeeService.getEmployeeATKWaitingList().subscribe(
      (data: any) => {
        this.employeeATKWaitingList = data;
        console.log(this.employeeATKWaitingList);
      },
      (error) => {}
    );
  }

  addWatingList(contactId: number){
    this.EmployeeService.insertEmployeeATKWaitingList(contactId).subscribe(
      (response) => {
        this.fetchData();
      },
      (error) => {}
    );
  }

  doneATK(){}
}
