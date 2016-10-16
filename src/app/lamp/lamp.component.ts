import { Component } from '@angular/core';
import {Lamp} from "../lamp";
import {DataService} from "../data/DataService";

@Component({
  selector: 'app-lamp',
  host: {
    class: 'card'
  },
  inputs: ['lamp', 'configuraties'],
  template: `  
   
    <div class="blurring dimmable image">
      <div class="ui dimmer">
        <div class="content">
          <div class="center">
            <div class="ui one buttons">
              <div *ngIf="lamp.aan" >
                <div class="ui basic red button inverted" (click)="zetUit()">Uit</div>
              </div>
              <div *ngIf="!lamp.aan">
                <div class="ui basic green button inverted" (click)="zetAan()">Aan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div *ngIf="lamp.aan" >
        <img class="ui medium image" src="/assets/incandescent-light-bulb-on.png">
      </div>
      <div *ngIf="!lamp.aan">
        <img class="ui medium image" src="/assets/incandescent-light-bulb.png">
      </div>
    </div>
    
    <div class="content">
      <a class="header">{{lamp.lampNaam}}</a>
    </div>
    
    <div class="extra content">
      Kies configuratie
      
      <div class="field">
          <select class="ui fluid dropdown" #t (change)="callType(t.value)">
            <option value="">Configuratie</option>
            <option *ngFor="let mlamp of configuraties" [value]="mlamp">{{mlamp}}</option>
          </select>
        </div>
    </div>
    
    <div class="extra content">
      <a (click)="toonConfig()">
        <i class="configure icon"></i>
        {{lamp.setup}}
      </a>
    </div>
    
  `,
  styleUrls: ['./lamp.component.css']
})
export class LampComponent {

  lamp: Lamp;
  configuraties: [string];

  constructor(private dataService: DataService) {

  }



  getData() {
    this.dataService
      .getData()
      .subscribe((data:string[]) => console.log("data: " + data));


  }

  zetAan(): boolean {
    console.log(`zet lamp ${this.lamp.lampNaam} aan`);
    this.lamp.aan = true;
    this.getData();
    return false;
  }

  zetUit(): boolean {
    console.log(`zet lamp ${this.lamp.lampNaam} uit`);
    this.lamp.aan = false;
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
