import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarvellousLabelComponent } from './marvellous-label/marvellous-label.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousLabelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
