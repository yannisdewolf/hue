import { Component } from '@angular/core';
import {Lamp} from "../lamp";
import {Http, Response} from "@angular/http";
import {Configuration} from "../config/Configuration";

@Component({
  selector: 'app-lamp',
  inputs: ['lamp'],
  host: {'class': 'item'},
  template: `  
    <div class="image">
      <img src="/assets/png/incandescent-light-bulb.png">
    </div>
    <div class="middle aligned content">
      <a class="header" (click)="switch()">{{lamp.lampNaam}}</a>
      
    </div>
    
  `,
  styleUrls: ['./lamp.component.css']
})
export class LampComponent {

  lamp: Lamp;
  data: Object;

  configuratie: string;
  configuratieDataGeladen: boolean;
  constructor(public http:Http, private config:Configuration) {
    this.configuratieDataGeladen = false;
  }

  switch(): boolean {
    if(this.lamp.staatAan()) {
      this.zetUit();
    } else {
      this.zetAan();
    }
    return false;
  }

  zetAan(): boolean {


    this.http.put(this.config.ServerWithApiUrl+'/lights/' + this.lamp.lampnummer + "/state", {on : true})
      .subscribe((res: Response) => {
        console.log("data from server: " + res);
        console.log(`zet lamp ${this.lamp.lampNaam} aan`);
        this.lamp.setAan();
      });


    return false;
  }

  zetUit(): boolean {
    this.http.put(this.config.ServerWithApiUrl +'/lights/' + this.lamp.lampnummer + "/state", {on : false})
      .subscribe((res: Response) => {
        console.log("data from server: " + res);
        console.log(`zet lamp ${this.lamp.lampNaam} uit`);
        this.lamp.setOff();
      });

    return false;
  }


  callType(value: string) : boolean {
    this.lamp.setup = value;
    console.log(value);
    return false;
  }

}
