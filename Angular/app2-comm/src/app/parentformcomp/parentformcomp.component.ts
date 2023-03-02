import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-parentformcomp',
  templateUrl: './parentformcomp.component.html',
  styleUrls: ['./parentformcomp.component.css']
})
export class ParentformcompComponent {
  UserModel: any = {
    fname: "",
    lname: "",
    email: "",
    mobile: ""
  }

  isEdit: boolean = false;
  updateIndex: number = 0;
  users: any = [];
  addUser(userForm: NgForm) {
    this.users.push(userForm.form.value);
    console.log(this.users);
    this.clearForm();
  }

  editUser(user: any) {
    this.isEdit = true;
    this.UserModel = { ...user.data }
    this.updateIndex = user.i;
  }

  updateUser() {
    console.log(this.UserModel)
    this.users[this.updateIndex] = this.UserModel;
    this.clearForm();
    this.isEdit = false;
  }

  clearForm() {
    this.UserModel = {
      fname: "",
      lname: "",
      email: "",
      mobile: ""
    }
  }
}
