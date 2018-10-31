import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdressService {

  private service:Http;

  constructor(p_service:Http) {
    this.service = p_service;
   }

   public getAdress(param_search:string):Observable<Array<string>> {

    let url: string = "https://api-adresse.data.gouv.fr/search/";
    url += "?q=" + param_search + "";
    url += "&autocomplete=0";
    url += "&type=street";

    const obs1:Observable<Response>= this.service.get(url);

    return obs1.pipe(
      map(
        (data:Response):string[] => {
          let raw:any = data.json();
          let features:Array<any> = raw.collection.features;
          let i:number = features.length;
          let adresse: Array<string> = new Array<string>();

          console.log(features[0].properties);

          while (--i > -1) {
            adresse.push(features[i].properties[0].label);
          }
          return adresse;  
        }
      )
    );
   }
}