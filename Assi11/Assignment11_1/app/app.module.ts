import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReverseStringComponent } from './reverse-string/reverse-string.component';
import { MyRevPipe } from './my-rev.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReverseStringComponent,
    MyRevPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
