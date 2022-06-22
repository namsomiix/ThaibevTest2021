import { Component } from '@angular/core';
import { EmployeeService } from '../app/services/employee.service';
import {Course} from '../app/models/course';
import { EmployeeATK } from './models/employee-atk';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public course: Course[] = [];
  public employeeATK: EmployeeATK[] = [];
  public employeeATKWaitingList: EmployeeATK[] = [];
  public isShown:boolean=false;

  constructor(
    private router: Router,
    private EmployeeService: EmployeeService){}
  title = 'ThaibevTest2021';

  ngOnInit(): void {
    console.log(this.title);
    this.fetchData();
  }
  fetchData(): void {

  }

  clickMenu(link) {
    this.isShown = false
    console.log('clickMenu')
    this.router.navigate(['atk-management-component']);
  }
 

}
