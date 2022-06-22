import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { EmployeeService } from '../../services/employee.service';
import { UploadFile } from '../../models/employee-atk';

@Component({
  selector: 'app-import-csv-excel',
  templateUrl: './import-csv-excel.component.html',
  styleUrls: ['./import-csv-excel.component.scss']
})
export class ImportCsvExcelComponent implements OnInit {
  fileName = '';
  public file_: UploadFile[] = [];
  constructor(private http: HttpClient,
    private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  onFileSelected(event) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;
        var file_ = {fileName: file.name}

        this.employeeService.uploadFile(file_).subscribe(x => {

        },
        error => {
        });

        // const formData = new FormData();

        // formData.append("thumbnail", file);
        
        // console.log(file)

        // const upload$ = this.http.post(`${environment.apiUrl}/Employee/thumbnail-upload`, file);

        // upload$.subscribe();
    }
  }
}
