import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mdchild',
  templateUrl: './mdchild.component.html',
  styleUrls: ['./mdchild.component.css']
})
export class MdchildComponent {
  @Input() mdUsers:any[] = [];
  @Output() sendEdit = new EventEmitter();
  @Output() sendDelete = new EventEmitter();
  editData(i:number){
    this.sendEdit.emit(i);
  }

  deleteData(i:number){
    this.sendDelete.emit(i);
  }
}
