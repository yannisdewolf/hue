import { Component } from '@angular/core';
import {Lamp} from "../lamp";
import {Http, Response} from "@angular/http";

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

  constructor(public http:Http) {

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

    this.http.put('http://192.168.1.6/api/newdevloper/lights/' + this.lamp.lampnummer + "/state", {on : true})
      .subscribe((res: Response) => {
        this.data = JSON.stringify(res.json());
        console.log("data from server: " + this.data);
        console.log(`zet lamp ${this.lamp.lampNaam} aan`);
        this.lamp.setAan();
      });


    return false;
  }

  zetUit(): boolean {
    this.http.put('http://192.168.1.6/api/newdevloper/lights/' + this.lamp.lampnummer + "/state", {on : false})
      .subscribe((res: Response) => {
        this.data = JSON.stringify(res.json());
        console.log("data from server: " + this.data);
        console.log(`zet lamp ${this.lamp.lampNaam} uit`);
        this.lamp.setOff();
      });

    return false;
  }

  toonConfig(): boolean {
    console.log(`configuratie van ${this.lamp.lampNaam}`);
    return false;
  }

  callType(value: string) : boolean {
    this.lamp.setup = value;
    console.log(value);
    return false;
  }

}
