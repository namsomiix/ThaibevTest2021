import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../../models/employee-atk';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {
  // @Input() public employee;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  public editForm: FormGroup;
  public employee : Employee
  public isLoading = false;
  constructor(public modal: NgbActiveModal
    ,private formBuilder: FormBuilder
    ,private employeeService: EmployeeService) { }

  ngOnInit() {    
    console.log(this.employee);
    this.setForm();
  }

  setForm(){
    this.editForm = this.formBuilder.group({
      contactId: [this.employee.contactId],
      employeeId: [this.employee.employeeId, Validators.required],
      firstName: [this.employee.firstName, Validators.required],
      lastName: [this.employee.lastName, Validators.required],
      company: [this.employee.company, Validators.required]
    });
  }

  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }

    this.isLoading = true;

    if(this.employee.contactId > 0){
      this.employeeService.updateEmployee(this.editForm.value).subscribe(x => {
        this.isLoading = false;
        this.modal.close('Yes');
      },
      error => {
        this.isLoading = false;
      });
    }
    else {
      this.employeeService.insertEmployee(this.editForm.value).subscribe(x => {
        this.isLoading = false;
        this.modal.close('Yes');
      },
      error => {
        this.isLoading = false;
      });
    }
  }

  passBack() {
    this.passEntry.emit(this.employee);
    this.modal.close(this.employee);
  }
}
