import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as L from 'leaflet';

@Component({
  selector: 'app-candy-map',
  templateUrl: './candy-map.component.html',
  styleUrls: ['./candy-map.component.css']
})
export class CandyMapComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  

  const myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 12);
 
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Frugal Map'
  }).addTo(myfrugalmap);
 
  const myIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
  });
 
 
  this.http.get('https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=bornes-podotactiles').subscribe((data: any) => {
    data.records.forEach(podotactile => {
      L.marker([podotactile.geometry.coordinates[1], podotactile.geometry.coordinates[0]], {icon: myIcon}).addTo(myfrugalmap);
    });
  });
 




}

  }
