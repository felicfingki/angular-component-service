import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { halaman1Component } from './halaman1/halaman1.component';
import { halaman2Component } from './halaman2/halaman2.component';
import { halaman3Component } from './halaman3/halaman3.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, halaman1Component, halaman2Component, halaman3Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
