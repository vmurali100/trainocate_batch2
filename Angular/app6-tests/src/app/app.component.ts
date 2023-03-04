import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:any=[]
  title = 'app6-tests';

  sayHello(){
    this.users = [{},{},{},{}]
  }
}
