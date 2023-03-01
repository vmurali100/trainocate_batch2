import { Component } from '@angular/core';

interface Person {
  fname: string;
  lname: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(){
    console.log("I will trigger when the Component getting Ready !!");
  }
  title: string = 'Welcome to Angular Project !!';
  person: Person = {
    fname: 'Ram',
    lname: 'Krishna',
  };
  users:string[] = ["Ram","Ravi","Sam"]
  sayHello(a:string):void {}
  
  ngAfterViewInit(){
    console.log("Component Just Initialized")
  }

  covertObjectIntoArray(obj:Person){
    return Object.values(obj)
  }

}
