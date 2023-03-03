import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  @Output() sendData = new EventEmitter();
  @Output() sendArray = new EventEmitter();
  @Output() sendObject = new EventEmitter();

  empName = "abc";
  empDetails = {
    role: "Developer",
    department: "IT"
  };
  techs = ["HTML", "CSS", "ReactJS"];

  sendName() {
    console.log("send Name");
    this.sendData.emit((<HTMLInputElement>document.getElementById("inputText")).value);
  }

  sendArrayFunction() {
    console.log("send Array");
    this.sendArray.emit(this.techs);
  }

  sendObjectFunction() {
    console.log("send Object");
    this.sendObject.emit(this.empDetails);
  }
}
