import { Component, Input } from '@angular/core';
import { Person } from '../app.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  @Input() message: string = '';
  @Input() users: string[] = [];
  @Input() person:Person={
    fname:"",
    lname:""
  }
}
