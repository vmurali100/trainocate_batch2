import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  allUsers:any = [];
  toEditIndex:number = 0;
  editing:boolean=false;
  user = {
    fname:"",
    lname:"",
    dob:"",
    email:"",
    mobile:""
  }

  constructor(private cs:CommonService){
  }

  ngOnInit() {
    console.log('I am from ngOnInit');
    this.cs.getSendBheaviour(0).subscribe((response) => {
      this.deleteData(response);
    });
  }

  addUser(data:NgForm){
    this.allUsers.push(data.value);
    console.log(this.allUsers);
  }

  editUser(data:NgForm){
    this.allUsers[this.toEditIndex] = data.value;
    this.editing = false;
  }

  editData(i:number) {
    this.toEditIndex = i;
    this.editing = true;
    //this.user = JSON.parse(JSON.stringify(this.allUsers[this.toEditIndex]))

    this.user.fname = this.allUsers[this.toEditIndex].fname;
    this.user.lname = this.allUsers[this.toEditIndex].lname;
    this.user.dob = this.allUsers[this.toEditIndex].dob;
    this.user.email = this.allUsers[this.toEditIndex].email;
    this.user.mobile = this.allUsers[this.toEditIndex].mobile;
  }

  deleteData(i:number) {
    this.allUsers.splice(i, 1);
  }
}
