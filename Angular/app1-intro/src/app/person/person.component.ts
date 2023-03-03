import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  message:string ="";

  getDataFromChild(message:any){
    console.log(message);
    this.message = message;
  }
}
