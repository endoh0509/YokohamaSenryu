import { Injectable } from '@angular/core';

import 'rxjs/Rx';
import {Http} from '@angular/http';

@Injectable()

export class SenryuMapService {

  constructor(private _http: Http) {
  }

  private geocoder: any = null;

  private selectWordUrl = 'https://webpro-taikimasuda.c9users.io/senryu/selectWord.php';  // URL to web api

  searchSenryuFromKeyword(keyword: string){
    var queryUrl = this.selectWordUrl + '?word=' + keyword;
    return this._http.get(queryUrl);
  }

  getLocation(): Promise<any>{
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            console.log(position);
            resolve({lat: position.coords.latitude, lng: position.coords.longitude});
          },
          function (err) {
            console.log(err);
          },
        );
      }else {
        reject(null);
      }
    });
  }
}
