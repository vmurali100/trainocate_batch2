import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  @Output() sendData = new EventEmitter() // Step 1 
  @Output() callEmployeeByName = new EventEmitter();
  empName = 'Ram Krishna From Child';
  calledEmployee = "SavindraSingh Shahoo";
  empDetails = {
    role: 'Developer',
    department: 'IT',
  };
  techs = ['HTML', 'CSS', 'ReactJS'];

  sendName() {
    console.log("sendName Called")
    this.sendData.emit(this.empName)
  }

  callEmployee() {
    console.log("calling Employee by name");
    this.callEmployeeByName.emit(this.calledEmployee);
  }
}
