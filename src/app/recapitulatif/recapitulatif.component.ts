import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdressService } from '../adress.service';
import { Localisation } from  '../localisation';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent implements OnInit {

  public adressInfo:Localisation = null;
  public mainMAp:string = "";
  public mainLabel:string[];
  private servicesAdress:AdressService;

  constructor(param_map_service:AdressService) {

    this.adressInfo = new Localisation("");
    this.servicesAdress = param_map_service;
    this.mainMAp = "";
    this.mainLabel = [];
    

   }

  ngOnInit() {

    const obs6:Observable<string[]> = this.servicesAdress.getAdress(this.adressInfo.label);
    obs6.subscribe(
      (param_laBel_adresses:string[]) => {
        this.mainLabel = param_laBel_adresses;
        console.log(this.mainLabel);
        
      }
    );

  }

}
