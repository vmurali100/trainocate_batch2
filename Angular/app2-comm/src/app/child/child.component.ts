import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() allUsers:any = [];
  @Output() sendEdit = new EventEmitter();
  @Output() sendDelete = new EventEmitter();
  constructor(private cs2:CommonService){

  }
  
  editData(i:number){
    this.sendEdit.emit(i);
  }

  deleteData(i:number){
    //this.sendDelete.emit(i);
    this.cs2.getAndSendData(i, 0);
  }
}
