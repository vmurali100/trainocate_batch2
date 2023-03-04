import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { DataService } from './data.service';
import { loadUsers, loadUsersSuccess } from './counter.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private dataService: DataService) {}
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.dataService
          .getUsers()
          .pipe(map((users) => loadUsersSuccess({ users })))
      )
    )
  );
}
