import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private cs:CommonService,private router:Router){

  }
  userForm: FormGroup = new FormGroup({
    id: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });
  isEdit: boolean = false;
  users: any[] = [];
  createUser(){
    console.log(this.userForm.value)
    this.cs.createUser(this.userForm.value).subscribe(res=>{
      this.router.navigate(['/contact',this.userForm.value.id])
    })
  }

  clearForm(){
    this.userForm.reset()
  }
  updateUser(){}
}
