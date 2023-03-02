import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() allusers:any[] = [];
  @Output() editUser=new EventEmitter()

  ngInOnit(){
    console.log(this.allusers)
  }
  checkProps(obj:any){
    return Object.values(obj)
  }
  handleEdit(usr:any){
    console.log(usr)
    this.editUser.emit(usr)
  }
}
