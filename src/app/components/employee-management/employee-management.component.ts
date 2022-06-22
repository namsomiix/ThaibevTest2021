import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee-atk';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { ModalContentComponent } from '../../modal/modal-content/modal-content.component';
import { ExportExcelService } from '../../services/export-excel.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss']
})
export class EmployeeManagementComponent implements OnInit {
  @ViewChild('closebutton') closebutton;

  public employeeList: Employee[] = [];
  public dataForExcel = [];
  public employeeExport: { employeeId: string, firstName: string,lastName:string,company:string}[] =[];

  constructor(private EmployeeService: EmployeeService
    , private modalService: NgbModal
    , private confirmationDialogService: ConfirmationDialogService
    , private exportExcelService: ExportExcelService
  ) { }


  ngOnInit() {
    console.log('employee-management');
    this.getEmployeeList();
  }


  getEmployeeList() {
    this.EmployeeService.getEmployeeList().subscribe(
      (data: any) => {
        this.employeeList = data;
      },
      (error) => { }
    );
  }

  public onSave() {
    this.closebutton.nativeElement.click();
  }

  
  open(content) {
    this.modalService.open(content).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  delete(contactId){
    // this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    // .then((confirmed) => console.log('User confirmed:', confirmed))
    // .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

    this.EmployeeService.deleteEmployee(contactId).subscribe(
      (response) => {
        this.getEmployeeList()
      },
      (error) => {}
    );
  }

  newEmployee(){
    var employee = {contactId: 0}
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.employee = employee;
    modalRef.result.then((yes) => {
      console.log("Ok");
      this.getEmployeeList();
    },
    (cancel)=>{
      console.log("Cancel");
    });
  }

  editModal(employee: Employee) {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.employee = employee;
    modalRef.result.then((yes) => {
      this.getEmployeeList();
    },
    (cancel)=>{
    });
  }

  exportExcel(){
    this.exportExcelService.exportToExcel(this.employeeList);
  }
}
