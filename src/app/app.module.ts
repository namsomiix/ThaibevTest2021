import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
// import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AtkManagementComponent } from './components/atk-management/atk-management.component';
import { ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { DisplayBarcodeComponent } from './components/display-barcode/display-barcode.component';
import { GenerateQrCodeComponent } from './components/generate-qr-code/generate-qr-code.component';
import { ApiOilComponent } from './components/api-oil/api-oil.component';
import { ApiMailComponent } from './components/api-mail/api-mail.component';
import { ImportCsvExcelComponent } from './components/import-csv-excel/import-csv-excel.component';
import { DownloadExcelComponent } from './components/download-excel/download-excel.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { DecodeMd5Component } from './components/decode-md5/decode-md5.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { EmployeeManagementModalComponent } from './modal/employee-management-modal/employee-management-modal.component';
import { ModalContainerComponent } from './modal/modal-container/modal-container.component';
import { ModalContentComponent } from './modal/modal-content/modal-content.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    AtkManagementComponent,
    PageNotFoundComponent,
    HomeComponent,
    DisplayBarcodeComponent,
    GenerateQrCodeComponent,
    ApiOilComponent,
    ApiMailComponent,
    ImportCsvExcelComponent,
    DownloadExcelComponent,
    UploadFileComponent,
    DecodeMd5Component,
    EmployeeManagementComponent,
    ConfirmationDialogComponent,
    EmployeeManagementModalComponent,
    ModalContainerComponent,
    ModalContentComponent, 
    ModalContainerComponent, 
    ModalContentComponent 
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    NgbModule,
    NgxBarcodeModule,
    NgxQRCodeModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularFileUploaderModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  exports: [MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ModalContentComponent ]
})
export class AppModule { }
