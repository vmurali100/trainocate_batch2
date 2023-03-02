import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdform',
  templateUrl: './mdform.component.html',
  styleUrls: ['./mdform.component.css'],
})
export class MdformComponent {
  userForm: FormGroup = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    country: new FormControl(),
  });
  users: any[] = [];
  index: number = 0;
  isEdit: boolean = false;
  addUser() {
    console.log(this.userForm.value);
    this.users.push(this.userForm.value);
    this.clearForm();
  }
  clearForm() {
    this.userForm.reset();
  }
  handleEdit(data: any) {
    this.isEdit = true;
    this.index = data.i;
    this.userForm.setValue(data.user);
  }
  updateUser(){
    this.users[this.index] = this.userForm.value
    this.clearForm();
    this.isEdit=false
  }
  handleDelUser(i:number){
    this.users = this.users.filter((usr,index)=>i !== index)
  }
}
