import { Component, } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component {
  messageFromComp1: any = '';
  constructor(private cs2: CommonService) {
    console.log('I am From Constructor');
  }
  ngOnInit() {
    console.log('I am from ngOnInit');
    this.cs2.getSendBheaviour(1).subscribe((response) => {
      response = JSON.stringify(response);
      console.log('From Comp2 :', response);
      this.messageFromComp1 = response
    });
  }

  sendMessageFromComp2(){
    console.log("sendMessageFromComp2 Trigged !!")
    this.cs2.getAndSendData(this.messageFromComp1, 0)
  }
}
