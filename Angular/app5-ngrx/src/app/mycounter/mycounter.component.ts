import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../counter.actions';

@Component({
  selector: 'app-mycounter',
  templateUrl: './mycounter.component.html',
  styleUrls: ['./mycounter.component.css']
})
export class MycounterComponent {

  constructor(private store:Store<{ count: number }>){
    this.count$ = store.select('count')
    console.log(this.count$)
  }
  count$: any;

  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment())
  }
 
  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement())
  }
 
  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset())
  }
}
