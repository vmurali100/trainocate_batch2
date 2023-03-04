import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MycounterComponent } from './mycounter/mycounter.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user.useEffects';
import { userReducer } from './users.reducer';

@NgModule({
  declarations: [AppComponent, MycounterComponent],
  imports: [BrowserModule, 
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot({ users: userReducer }, {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
