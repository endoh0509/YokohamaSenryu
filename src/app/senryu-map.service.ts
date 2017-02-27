import { Injectable } from '@angular/core';

import { LatLng } from 'angular2-google-maps/core';

import { SenryuData } from './senryu-map/SenryuData'

import 'rxjs/Rx';
import {HttpModule} from '@angular/http';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

// import {JSONP_PROVIDERS} from '@angular/http'
// import {Jsonp} from '@angular/http';

// import { JsonApiDatastoreConfig, JsonApiDatastore } from 'angular2-jsonapi';

declare let google: any;

// NgModule({
//   imports: [
//     BrowserModule,
//     HttpModule
//   ]
// });


@Injectable()
// @JsonApiDatastoreConfig({
//   baseUrl: 'https://webpro-taikimasuda.c9users.io/senryu/selectWord.php',
//   models: {
//     // posts: Post,
//     // comments: Comment,
//     // users: User
//   }
// })

export class SenryuMapService {

  friends: any = null;
  status: any = null;
  error: any = null;

  constructor(private _http: Http) {
  }
  // constructor(private _jsonp: Jsonp) {}

  private geocoder: any = null;

  private selectWordUrl = 'https://webpro-taikimasuda.c9users.io/senryu/selectWord.php';  // URL to web api

  searchSenryuFromKeyword(keyword: string){
    var queryUrl = this.selectWordUrl + '?word=' + keyword;
    // console.log(queryUrl);
    // console.log(this.http.get(queryUrl));


    // console.log(this._http.get(queryUrl).subscribe);
    return this._http.get(queryUrl);

    // this._http.get(queryUrl)
    //   .subscribe(
    //     res  => {
    //       var senryuList = [];
    //       for(var key in res.json()){
    //         // var senryu = new SenryuData();
    //         senryuList.push(res.json()[key]);
    //       }
    //
    //       this.friends = res.json();
    //       this.status = res.status;
    //       this.error = "";
    //       console.log(res.json());
    //       // return senryuList;
    //       resolve(senryuList);
    //     },
    //     error => {
    //       this.error = error.text().substr(287,100);
    //       this.status = error.status;
    //       this.friends = [];
    //
    //       // return null;
    //       reject(null);
    //     },);

    // this._jsonp.request(queryUrl, { method: 'Get' })
    //   .subscribe((res) => {
    //     // (...)
    //     console.log(res);
    //   });
    // return null;
  }

  getLocation(): Promise<any>{
    console.log('getLocation');
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            console.log(position);
            resolve({lat: position.coords.latitude, lng: position.coords.longitude});
            console.log('resolve');
          },
          function (err) {
            console.log(err);
          },
        );
      }else {
        console.log('reject');
        reject(null);
      }
    });
  }
}
