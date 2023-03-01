// Ipmort
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Configuration
@NgModule({
  declarations: [AppComponent], 
  imports: [BrowserModule], // What are the dependencies required for this Module
  bootstrap: [AppComponent], // Which Compoent has to Render first
})
// Exporting
export class AppModule {}
