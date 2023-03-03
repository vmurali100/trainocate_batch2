import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userForm: FormGroup = new FormGroup({
    id: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });
  isEdit: boolean = false;
  users: any[] = [];
  constructor(private cs: CommonService) {
    console.log(this.cs);
  }

  getAllUsers() {
    this.cs.getAllUsers().subscribe((response: any) => {
      console.log(response);
      this.users = response;
    });
  }
  clearForm(){
    this.userForm.reset()
  }
  handleEdit(usr: any) {
    this.isEdit = true
    this.userForm.setValue(usr);
  }
  deleteUser(usr: any) {
    this.cs.deleteUser(usr.id).subscribe(() => {
      this.getAllUsers();
    });
  }
  updateUser(){
    this.cs.updateUser(this.userForm.value).subscribe(()=>{
      this.getAllUsers();
      this.isEdit = false;
      this.clearForm();
    })
  }
  ngAfterViewInit() {
    this.getAllUsers();
  }

  createUser(){
    this.cs.createUser(this.userForm.value).subscribe(()=>{
      this.getAllUsers()
      this.clearForm()
    })
  }
}
