import { Component, OnInit } from '@angular/core';

import { SenryuTimelineService } from '../senryu-timeline.service'

import {trigger, state, style, transition, animate} from '@angular/core';

import {Observable} from "rxjs";

@Component({
  providers: [SenryuTimelineService],
  selector: 'app-senryu-timeline',
  templateUrl: './senryu-timeline.component.html',
  styleUrls: ['./senryu-timeline.component.css'],

  animations: [
    trigger('flyInOut', [
      state('right', style({
        transform: 'translateX(0%)'
      })),
      state('center', style({
        transform: 'translateX(100%)'
      })),
      state('left', style({
        transform: 'translateX(200%)'
      })),
      state('out', style({
        transform: 'translateX(300%)'
      })),
      transition('right => center', [
        animate('1000ms ease-out')
      ]),
      transition('center => left', [
        animate('1000ms ease-out')
      ]),
      transition('left => out', [
        animate('1000ms ease-out')
      ]),
      transition('out => right', [
        animate('1000ms ease-out')
      ])
    ])
  ]
})

export class SenryuTimelineComponent implements OnInit {

  senryuList: Object[];
  public state : string;

  constructor(public service: SenryuTimelineService) {
    this.state = "right";
  }

  private onClick() {
    if(this.state == 'out'){
      this.state = 'right';
    }else if(this.state == 'right'){
      this.state = 'center';
    }else if(this.state == 'center'){
      this.state = 'left';
    }else if(this.state == 'left'){
      this.state = 'out';
    }
    console.log(this.state);
  }

  ngOnInit() {
    let get = this.service.getNewSenryu(3);
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
            member: obj.member,
            insTime: obj.insTime
          });
        }
        console.log(this.senryuList);
      },
      error => {
        console.log(error);
      },
    );

    let timer = Observable.timer(2000, 10000);
    timer.subscribe(t => this.ticksFunc());
  }

  ticksFunc(){
    let get = this.service.getNewSenryu(1);
    get.subscribe(
      res  => {
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
        this.senryuList.pop();

        // **** animation ****

        console.log(this.senryuList);
      },
      error => {
        console.log(error);
      },
    );
  }
}
