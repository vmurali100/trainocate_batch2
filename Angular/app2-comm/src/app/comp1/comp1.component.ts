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
  message :string = "Welcome to Sibiling Components Communication !!! - Comp 1"

  sendMessageFromComp1(){
    console.log("sendMessageFromComp1 Trigged !!")
    this.cs.getAndSendData(this.message)
  }
}
