import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  userDetails:any={
    fname:"",
    lname:"",
    email:""
  }
  users: any = [
    {
      fname:"Sam",
      lname:"Kumar",
      country:"India"
    }
  ];
  addUser(userForm: NgForm) {
    this.users.push(userForm.value);
  }
  editUserInParent(userDetails:any){
    this.userDetails={...userDetails}
  
  }
}
