import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  // My Comp1 is Dependent on CommonService
  constructor(private cs:CommonService){

  }
  message :string = "Welcome to Sibiling Components Communication !!! - Comp 1";
  arraystr:string[] = ["Hello 1", "Test 2", "Extra 3"];
  obj = {test: "test", var2: "some var"};
  receive:string = "";

  ngOnInit() {
    console.log('I am from ngOnInit');
    this.cs.getSendBheaviour(0).subscribe((response) => {
      response = JSON.stringify(response);
      console.log('From Comp2 :', response);
      this.receive = response
    });
  }

  sendMessageFromComp1(){
    console.log("sendMessageFromComp1 Trigged !!")
    this.cs.getAndSendData(this.message, 1)
  }
  sendArrayFromComp1(){
    console.log("sendMessageFromComp1 Trigged !!")
    this.cs.getAndSendData(this.arraystr, 1)
  }
  sendObjectFromComp1(){
    console.log("sendMessageFromComp1 Trigged !!")
    this.cs.getAndSendData(this.obj, 1)
  }
}
