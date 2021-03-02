import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { halaman1Component } from '../halaman1/halaman1.component';
import { halaman2Component } from '../halaman2/halaman2.component';
import { halaman3Component } from '../halaman3/halaman3.component';

import {Routes} from '@angular/router';

const ROUTES : Routes = [
  (path : 'halaman1', component : halaman1Component),
  (path : 'halaman2', component : halaman2Component),
  (path : 'halaman3', component : halaman3Component)
]

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, halaman1Component, halaman2Component, halaman3Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
