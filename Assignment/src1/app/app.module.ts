import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarvellousFirstAppComponent } from './marvellous-first-app/marvellous-first-app.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousFirstAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
