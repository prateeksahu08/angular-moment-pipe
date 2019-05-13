import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormatDatePipe } from './pipe/format-date.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FormatDatePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


