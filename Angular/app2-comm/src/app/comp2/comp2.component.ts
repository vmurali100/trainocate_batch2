import { Component, } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component {
  messageFromComp1: string = '';
  constructor(private cs2: CommonService) {
    console.log('I am From Constructor');
  }
  ngOnInit() {
    console.log('I am from ngOnInit');
    this.cs2.sendData.subscribe((response) => {
      console.log('From Comp2 :', response);
      this.messageFromComp1 = response
    });
  }

  message :string = "Welcome to Sibiling Components Communication !!! - Message from Comp2"
  sendMessageFromComp2(){
    console.log("sendMessageFromComp2 Trigged !!")
    this.cs2.getAndSendData2(this.message)
  }
}
