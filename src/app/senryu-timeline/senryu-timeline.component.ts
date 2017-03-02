import { Component, OnInit } from '@angular/core';

import { SenryuTimelineService } from '../senryu-timeline.service'

@Component({
  providers: [SenryuTimelineService],
  selector: 'app-senryu-timeline',
  templateUrl: './senryu-timeline.component.html',
  styleUrls: ['./senryu-timeline.component.css']
})

export class SenryuTimelineComponent implements OnInit {

  senryuList: Object[];

  constructor(public service: SenryuTimelineService) { }

  ngOnInit() {
    let get = this.service.getNewSenryu(10);
    get.subscribe(
      res  => {
        this.senryuList = [];
        for (let key in res.json()) {
          let obj = res.json()[key];
          this.senryuList.push({
            // lat: +obj.lat, lng: +obj.lon,
            label: obj.id,
            // draggable: false,
            top: obj.senryuTop, middle: obj.senryuMiddle, bottom: obj.senryuBottom,
            member: obj.menmber,
            insTime: obj.insTime
          });
        }
        console.log(this.senryuList);
      },
      error => {
        console.log(error);
      },
    );
  }

}
