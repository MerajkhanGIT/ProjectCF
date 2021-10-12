import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextEditorComponent } from './TextEditor/text-editor/text-editor.component';
import { SendMailComponent } from './Mail/send-mail/send-mail.component';
import { ImageGallaryComponent } from './ImageGallary/image-gallary/image-gallary.component';
import { ExportToExcelComponent } from './Excel/export-to-excel/export-to-excel.component';
import { ImportExcelComponent } from './Excel/import-excel/import-excel.component';
import { EmployeeMasterComponent } from './Employee/employee-master/employee-master.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    SendMailComponent,
    ImageGallaryComponent,
    ExportToExcelComponent,
    ImportExcelComponent,
    EmployeeMasterComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
