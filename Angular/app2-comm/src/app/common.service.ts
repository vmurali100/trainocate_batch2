import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private sendData:BehaviorSubject<any>[] = [];

  getAndSendData(msg:any, id:number){
    console.log(this.sendData[id]);
    if(this.sendData[id] == null || this.sendData[id] == undefined )
      this.sendData[id] = new BehaviorSubject<any>({});
    this.sendData[id].next(msg)
  }

  getSendBheaviour(id:number){
    if(this.sendData[id] == null || this.sendData[id] == undefined )
      this.sendData[id] = new BehaviorSubject<any>({});
    return this.sendData[id];
  }
  constructor() { }
}
