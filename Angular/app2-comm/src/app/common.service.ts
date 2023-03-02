import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  sendData = new BehaviorSubject("")
  getAndSendData(msg:string){
    console.log("In Service : ",msg)
    this.sendData.next(msg)
  }
  constructor() { }
}
