import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddPrefixPipe } from './pipes/add-zero.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddPrefixPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
