import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CommonModule } from '@angular/common';
import { AtkManagementComponent } from './components/atk-management/atk-management.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DecodeMd5Component } from './components/decode-md5/decode-md5.component';
import { DisplayBarcodeComponent } from './components/display-barcode/display-barcode.component';
import { GenerateQrCodeComponent } from './components/generate-qr-code/generate-qr-code.component';
import { DownloadExcelComponent } from './components/download-excel/download-excel.component';
import { ImportCsvExcelComponent } from './components/import-csv-excel/import-csv-excel.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employee-management-component', component: EmployeeManagementComponent },
  { path: 'atk-management-component', component: AtkManagementComponent },
  { path: 'decode-md5-component', component: DecodeMd5Component },
  { path: 'display-barcode-component', component: DisplayBarcodeComponent },
  { path: 'generate-qr-code-component', component: GenerateQrCodeComponent },
  { path: 'download-excel-component', component: DownloadExcelComponent },
  { path: 'import-csv-excel-component', component: ImportCsvExcelComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
