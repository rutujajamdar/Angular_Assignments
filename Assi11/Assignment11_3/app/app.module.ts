import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarvellouschkPipe } from './marvellouschk.pipe';
import { CheckcompComponent } from './checkcomp/checkcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvellouschkPipe,
    CheckcompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
