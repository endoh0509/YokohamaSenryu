import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senryu-map',
  templateUrl: './senryu-map.component.html',
  styleUrls: ['./senryu-map.component.css']
})

export class SenryuMapComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {
    // this.lat = 51.678418;
    // this.lng = 7.809007;
    // this.getGeolocation();
  }

  getGeolocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  ngOnInit() {
  }

}
