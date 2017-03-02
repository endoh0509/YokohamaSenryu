import { Component, OnInit, NgZone, ViewChild, ElementRef, Renderer } from '@angular/core';

// import { AgmCoreModule } from 'angular2-google-maps/core';
import { MarkerManager } from 'angular2-google-maps/core';

import { SenryuMapService } from '../senryu-map.service'

import { SenryuData } from './SenryuData'

// import {JSONP_PROVIDERS, Jsonp} from 'angular2/http';

@Component({
  providers: [SenryuMapService],
  selector: 'app-senryu-map',
  templateUrl: './senryu-map.component.html',
  styleUrls: ['./senryu-map.component.css'],
})


export class SenryuMapComponent implements OnInit {

  zoom: number = 15;
  // lat: number = 51.678418;
  // lng: number = 7.809007;

  // 荻窪
  lat: number = 35.7063;
  lng: number = 139.6252;


  // senryuList: SenryuData[] = [];
  senryuList: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true,
      top: 'test1',
      middle: 'testdayo',
      bottom: 'test1',
      member: 'taro'
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false,
      top: 'test1',
      middle: 'testdayo',
      bottom: 'test1',
      member: 'jiro'
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true,
      top: 'test1',
      middle: 'testdayo',
      bottom: 'test1',
      member: 'hanako'
    }
  ];

  searchKeyword: string = '';

  constructor(public service: SenryuMapService) {
    // this.milk = new MilkCocoa.connectWithApiKey('your-app-id.mlkcca.com', 'API_Key', 'API_Secret');
  }

  clickedMarker(label: string, index: number) {
    // console.log('clicked the marker: ${label || index}');
    console.log(label, index)
  }

  valueChange(evt){
    this.searchKeyword = evt;
  }

  searchBtnFunc(evt) {
    if(evt.keyCode == 13){
      let get = this.service.searchSenryuFromKeyword(this.searchKeyword);
      get.subscribe(
        res  => {
          console.log(this.senryuList);
          this.senryuList = [];
          for (let key in res.json()) {
            let obj = res.json()[key];
            this.senryuList.push({
              lat: +obj.lat, lng: +obj.lon,
              label: obj.id,
              draggable: false,
              top: obj.senryuTop, middle: obj.senryuMiddle, bottom: obj.senryuBottom,
              member: obj.menmber
            });
          }
          console.log(this.senryuList);
        },
          error => {
            console.log(error);
        },
      );
    }


    return null;
  }

  ngOnInit() {
    for(let i = 0; i < 2; i++){
      // let senryu = new SenryuData(this.lat + 1, this.lng + 1, 'test', 'testest', 'testets', 'tes');
      // this.senryuList.push(senryu);
    }

    this.service.getLocation().then(
      rtn => {
        this.lat = rtn.lat;
        this.lng = rtn.lng;
      }
    );

  }
}

interface marker {
  lat: number;
  lng: number;
  label: string;
  draggable: boolean;
  top: string;
  middle: string;
  bottom: string;
  member: string;
}
