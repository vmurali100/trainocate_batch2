import { Component, OnInit } from '@angular/core';

export interface Person {
  fname: string;
  lname: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    console.log("I will trigger when the Component getting Ready !!");
  }
  myTitle: string = 'Welcome to Angular Project !!';
  myPerson: Person = {
    fname: '',
    lname: '',
  };
  users: string[] = ["Ram", "Ravi", "Sam"]
  sayHello(a: string): void { }

  ngAfterViewInit() {
    console.log("Component Just Initialized")
  }

  ngOnInit() { console.log("OnInit"); }

  covertObjectIntoArray(obj: Person) {
    return Object.values(obj);
  }
}
