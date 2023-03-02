import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mdchild',
  templateUrl: './mdchild.component.html',
  styleUrls: ['./mdchild.component.css'],
})
export class MdchildComponent {
  @Input() mdUsers: any[] = [];
  @Output() delUser = new EventEmitter();
  @Output() sendUser = new EventEmitter();
  handleEdit(user: any, i: number) {
    this.sendUser.emit({ user, i });
  }
  deleteUser(i: number) {
    this.delUser.emit(i);
  }
}
