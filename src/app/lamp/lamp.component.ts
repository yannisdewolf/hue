import { Component } from '@angular/core';
import {Lamp} from "../lamp";

@Component({
  selector: 'app-lamp',
  host: {
    class: 'card'
  },
  inputs: ['lamp'],
  template: `  
   
    <div class="blurring dimmable image">
      <div class="ui dimmer">
        <div class="content">
          <div class="center">
            <div class="ui two buttons">
              <div class="ui basic green button inverted" (click)="zetAan()">Aan</div>
              <div class="ui basic red button inverted" (click)="zetUit()">Uit</div>
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

  zetAan(): boolean {
    console.log(`zet lamp ${this.lamp.lampNaam} aan`);
    this.lamp.aan = true;
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

}
