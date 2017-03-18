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
import {MdInputModule} from '@angular2-material/input';
import {MdTabsModule} from '@angular2-material/tabs';
import {MdListModule} from '@angular2-material/list';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdSidenavModule} from '@angular2-material/sidenav';
import {MdGridListModule} from '@angular2-material/grid-list';


// import { mdContentDirective } from 'node_modules/angular-material/modules/js/content/content.js';


// https://angular-maps.com/docs/getting-started.html
import { AgmCoreModule } from 'angular2-google-maps/core';
var API_KEY = 'AIzaSyAlK1Zht4CUW9GdsLkwJ2SvB7hwBbjR2wg';

import {stringDistance} from "codelyzer/util/utils";
import { SenryuMapComponent } from './senryu-map/senryu-map.component';
import { SenryuTimelineComponent } from './senryu-timeline/senryu-timeline.component';

// import { JsonApiModule } from 'angular2-jsonapi';

@NgModule({
  declarations: [
    AppComponent,
    SenryuMapComponent,
    SenryuTimelineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({  //ADD
      apiKey: API_KEY
    }),
    // JsonApiModule,
    MdCardModule, MdButtonModule, MdIconModule, MdInputModule,
    MdTabsModule, MdListModule, MdSidenavModule, MdToolbarModule, MdGridListModule  //ADD
  ],
  providers: [ MdIconRegistry ],  //ADD
  bootstrap: [AppComponent]
})
export class AppModule { }
