import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private route:ActivatedRoute){
    this.route.params.subscribe((res:any)=>{
      console.log(res.myId)
    })
  }
}
