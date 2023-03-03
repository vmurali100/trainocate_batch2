import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent {
  constructor(private cs:CommonService){}
  ngAfterViewInit(){
    this.cs.getCricket().subscribe(res=>{
      console.log(res)
    })
  }
}
