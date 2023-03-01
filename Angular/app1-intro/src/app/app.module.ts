// Ipmort
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { PersonComponent } from './person/person.component';
import { StudentComponent } from './student/student.component';

// Configuration
@NgModule({
  declarations: [AppComponent, StudentComponent, PersonComponent,EmployeeComponent],
  imports: [BrowserModule], // What are the dependencies required for this Module
  bootstrap: [AppComponent], // Which Compoent has to Render first
})
// Exporting
export class AppModule {}
