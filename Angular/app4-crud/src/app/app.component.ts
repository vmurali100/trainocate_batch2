import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: any[] = [];
  currentClasses:any={}
  constructor(private _http: HttpClient) {}
  canSave : boolean = true
  ngOnInit() {
    this._http
      .get(
        'https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&x={date}&pretty=true'
      )
      .subscribe((res:any) => {
        console.log(res);
        this.users=res
      });
  }

  formatObject(obj:any){
    return Object.values(obj)
  }
  formatObjectKeys(obj:any){
    return Object.keys(obj)
  }
  title = 'app4-crud';

  setClasses(){
    this.currentClasses={
      'font-style':  this.canSave ? 'italic' : 'normal',
    }
  }
}
