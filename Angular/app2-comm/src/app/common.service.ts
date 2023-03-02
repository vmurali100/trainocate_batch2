import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  sendData = new BehaviorSubject("")
  sendData2 = new BehaviorSubject("")

  getAndSendData(msg: string) {
    console.log("In Service : ", msg)
    this.sendData.next(msg)
  }
  constructor() { }

  getAndSendData2(msg: string) {
    this.sendData2.next(msg)
  }
}
