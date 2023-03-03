import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private cs:CommonService){
  }

  allUsers:any = [];
  toEditIndex:number = 0;
  editing:boolean=false;
  userform:FormGroup = new FormGroup({
    fname:new FormControl(),
    lname:new FormControl(),
    dob:new FormControl(),
    email:new FormControl(),
    mobile:new FormControl(),
    id:new FormControl()
  })

  ngOnInit(){
    this.getAllUsers();
  }

  getAllUsers(){
    this.cs.getAllUsers().subscribe(response => {
      console.log(response);
      this.allUsers = response;
    })
  }

  addUser(){
    this.cs.createUser(this.userform.value).subscribe(response=>{
      console.log(response);
    });
    this.getAllUsers();
    this.resetForm();
  }

  editUser(){
    this.cs.updateUser(this.allUsers[this.toEditIndex].id, this.userform.value).subscribe(response=>{
      console.log(response);
    });
    this.editing = false;
    this.resetForm();
    this.getAllUsers();
  }

  editData(i:number) {
    this.toEditIndex = i;
    this.editing = true;
    //this.user = JSON.parse(JSON.stringify(this.allUsers[this.toEditIndex]))
    this.userform.setValue(this.allUsers[this.toEditIndex]);

    // this.user.fname = this.allUsers[this.toEditIndex].fname;
    // this.user.lname = this.allUsers[this.toEditIndex].lname;
    // this.user.dob = this.allUsers[this.toEditIndex].dob;
    // this.user.email = this.allUsers[this.toEditIndex].email;
    // this.user.mobile = this.allUsers[this.toEditIndex].mobile;
  }

  deleteData(id:number) {
    //this.allUsers.splice(i, 1);
    this.cs.deleteUser(id).subscribe(response=>{
      console.log(response);
    });
    this.getAllUsers();
  }

  resetForm(){
    this.userform.reset();
  }
}
