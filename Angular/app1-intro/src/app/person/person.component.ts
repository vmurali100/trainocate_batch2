import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  messageFromChild :string=""
  getDataFromChild(data:string){
    console.log(data)
    this.messageFromChild = data
  }
}
