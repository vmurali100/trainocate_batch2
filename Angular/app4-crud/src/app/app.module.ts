import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomPipe } from './custom.pipe';
import { SomePipe } from './some.pipe';
import { ChangetimePipe } from './changetime.pipe';
import { MydirDirective } from './mydir.directive';

@NgModule({
  declarations: [AppComponent, CustomPipe, SomePipe, ChangetimePipe, MydirDirective],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
