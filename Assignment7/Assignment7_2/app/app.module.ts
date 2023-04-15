import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FunctioncallComponent } from './functioncall/functioncall.component';

@NgModule({
  declarations: [
    AppComponent,
    FunctioncallComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
