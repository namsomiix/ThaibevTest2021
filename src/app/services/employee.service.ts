import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Course } from '../models/course';
import { EmployeeATK, UploadFile } from '../models/employee-atk';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
    ) { }

  getCourseList(textSearch: string) {

    var _params = "contactId=1029862";
    _params += "&lngId=1";
    _params += "&domainId=1";

    return this.http.get<any>(`${environment.apiUrl}/Course/GetCourseList?` + _params).pipe(
      map((result: Course[]) => {
        return result;
      }
      )
    );
  }

  getEmployeeList() {
    return this.http.get<any>(`${environment.apiUrl}/Employee/GetEmployeeList?`).pipe(
      map((result: EmployeeATK[]) => {
        return result;
      }
      )
    );
  }

  insertEmployee(employee: EmployeeATK) {

    const config = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Accept', 'application/json')

    return this.http.post<any>(`${environment.apiUrl}/Employee/InsertEmployee`, JSON.stringify(employee), { headers: config });
  }

  updateEmployee(employee: EmployeeATK) {

    const config = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Accept', 'application/json')

    return this.http.post<any>(`${environment.apiUrl}/Employee/UpdateEmployee`, JSON.stringify(employee), { headers: config });
  }

  deleteEmployee(contactId: number) {
    var body = {
      "ContactId": contactId,
      "UpdatedBy": -1
    }
    const config = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Accept', 'application/json')

    return this.http.post<any>(`${environment.apiUrl}/Employee/DeleteEmployee`, JSON.stringify(body), { headers: config });
  }

  uploadFile(file: UploadFile) {

    const config = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Accept', 'application/json')

    return this.http.post<any>(`${environment.apiUrl}/Employee/thumbnail-upload`, JSON.stringify(file), { headers: config });
  }

  getEmployeeATKList() {
    return this.http.get<any>(`${environment.apiUrl}/Employee/GetEmployeeATKList?`).pipe(
      map((result: EmployeeATK[]) => {
        return result;
      }
      )
    );
  }
  
  getEmployeeATKWaitingList() {
    return this.http.get<any>(`${environment.apiUrl}/Employee/GetEmployeeATKWaitingList?`).pipe(
      map((result: EmployeeATK[]) => {
        return result;
      }
      )
    );
  }

  insertEmployeeATKWaitingList(contactId: number) {
    var body = {
      "ContactId": contactId,
      "UpdatedBy": -1
    }
    const config = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Accept', 'application/json')

    return this.http.post<any>(`${environment.apiUrl}/Employee/InsertEmployeeATKWaitingList`, JSON.stringify(body), { headers: config });
  }
}
