import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-mdform',
  templateUrl: './mdform.component.html',
  styleUrls: ['./mdform.component.css']
})
export class MdformComponent {
  userform:FormGroup = new FormGroup({
    fname:new FormControl(),
    lname:new FormControl(),
    dob:new FormControl(),
    email:new FormControl(),
    mobile:new FormControl(),
  })

  users:any[] = [];

  addUser(){
    console.log("AddUser");
    this.users.push(this.userform.value);
    this.clearForm();
  }

  clearForm(){
    this.userform.reset();
  }
}
