import {Component, OnInit} from '@angular/core';
import {Lamp} from "../lamp";
import {Http, Response} from "@angular/http";
import {Configuration} from "../config/Configuration";
import {DataService} from "../data/DataService";
import {Kleur} from "../kleur";

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
      <div class="content" >
        
        <a *ngFor="let kleur of kleuren" (click)="switchKleur(kleur)"><span class="kleur">{{kleur.naam}}</span> </a>
      </div>
      <div class="content">
      Helderheid
        <button class="ui button" (click)="increase()">+</button>
        <button class="ui button" (click)="decrease()">-</button>
      </div>
    </div>
    
  `,
  styleUrls: ['./lamp.component.css']
})
export class LampComponent implements OnInit {

  kleuren: Array<Kleur>;

  ngOnInit(): void {
    this.dataService.getKleurtjes().subscribe(kleurtjes => this.kleuren = kleurtjes);
  }

  lamp: Lamp;
  data: Object;

  constructor(public http:Http, private config:Configuration,  private dataService: DataService) {
  }

  increase(): boolean {

    this.http.put(this.config.ServerWithApiUrl+'/lights/' + this.lamp.lampnummer + "/state",
      {"bri_inc":32, "transitiontime":5 })
      .subscribe((res: Response) => {
        console.log("response: " + res);
      });

    return false;
  }

  decrease(): boolean {
    this.http.put(this.config.ServerWithApiUrl+'/lights/' + this.lamp.lampnummer + "/state",
      {"bri_inc":-32, "transitiontime":5 })
      .subscribe((res: Response) => {
        console.log("response: " + res);
      });

    return false;
  }

  switch(): boolean {
    if(this.lamp.staatAan()) {
      this.zetUit();
    } else {
      this.zetAan();
    }
    return false;
  }

  switchKleur(kleur: Kleur): boolean{
    console.log("kleur gekozen " + kleur.naam);



    this.http.put(this.config.ServerWithApiUrl+'/lights/' + this.lamp.lampnummer + "/state",
      {bri : kleur.bri, hue: kleur.hue, sat: kleur.sat, xy: kleur.xy, ct: kleur.ct, colormode: kleur.colormode})
      .subscribe((res: Response) => {
        console.log("response: " + res);
      });



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
    this.dataService.zetUit(this.lamp.lampnummer).subscribe((res: Response) => {
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
