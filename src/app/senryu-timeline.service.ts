import { Injectable } from '@angular/core';

import {Http} from '@angular/http';

@Injectable()
export class SenryuTimelineService {

  private getNewSenryuUrl = 'https://webpro-taikimasuda.c9users.io/senryu/selectNewSenryu.php';  // URL to web api

  constructor(private _http: Http) { }

  getNewSenryu(num: number){
    var queryUrl = this.getNewSenryuUrl + '?num=' + num;
    return this._http.get(queryUrl);
  }
}
