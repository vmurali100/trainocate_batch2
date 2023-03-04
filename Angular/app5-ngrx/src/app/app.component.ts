import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers } from './counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users$: any;
  constructor(private store:Store){

  }
  title = 'app5-ngrx';
  loadUsers(){
    this.store.dispatch(loadUsers())
  }
  ngOnInit(){
    this.users$ = this.store.select('users');

  }
}
