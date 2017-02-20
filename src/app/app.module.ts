import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// ADD
// import { MaterialModule } from '@angular/material';
// import 'hammerjs';

import {MdCardModule} from '@angular2-material/card';
import {MdButtonModule} from '@angular2-material/button';
import {MdIconModule} from '@angular2-material/icon';
import {MdIconRegistry} from '@angular2-material/icon';

// https://angular-maps.com/docs/getting-started.html
import { AgmCoreModule } from 'angular2-google-maps/core';
var API_KEY = 'AIzaSyAlK1Zht4CUW9GdsLkwJ2SvB7hwBbjR2wg';

import {stringDistance} from "codelyzer/util/utils";
import { SenryuMapComponent } from './senryu-map/senryu-map.component';

@NgModule({
  declarations: [
    AppComponent,
    SenryuMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({  //ADD
      apiKey: API_KEY
    }),
    MdCardModule, MdButtonModule, MdIconModule  //ADD
  ],
  providers: [ MdIconRegistry ],  //ADD
  bootstrap: [AppComponent]
})
export class AppModule { }
