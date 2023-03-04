import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app7-testing-api';
  users: any;
  myUsers:any = [];
  constructor(private _http: HttpClient) {}

  getUsers() {
    this._http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => {
        this.users = res;
      });
  }

  updateUsers() {
    this.myUsers = [
      {
        email: 'KAntunes@vitae.ly',
      },
      {
        email: 'JNash@amet.net',
      },
      {
        email: 'CLiso@dolor.gov',
      },
      {
        email: 'DRipley@lorem.com',
      },
      {
        email: 'RKesner@lectus.net',
      },
      {
        email: 'JFine@vel.net',
      },
      {
        email: 'CBrinker@amet.com',
      },
      {
        email: 'HKarneol@non.ly',
      },
      {
        email: 'ARipley@sagittis.ly',
      },
      {
        email: 'DVrtis@ante.org',
      },
    ];
  }
}
