import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  messageFromComp2: string = '';
  // My Comp1 is Dependent on CommonService
  constructor(private cs:CommonService){

  }
  ngOnInit() {
    console.log('I am from ngOnInit');
    this.cs.sendData2.subscribe((response:string) => {
      console.log('From Comp2 :', response);
      this.messageFromComp2 = response;
    });
  }

  message :string = "Welcome to Sibiling Components Communication !!! - Message from Comp1"
  sendMessageFromComp1(){
    console.log("sendMessageFromComp1 Trigged !!")
    this.cs.getAndSendData(this.message)
  }

}
