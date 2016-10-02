import { Component } from '@angular/core';
import {Lamp} from "../lamp";

@Component({
  selector: 'app-lamp',

  inputs: ['lamp'],
  template: `  
  <div class="column">
    <div class="ui segment">   
     
      <div>
        <div class="header">{{lamp.lampNaam}}</div>
      </div>
      
      <div>
        <div class="ui image small circular">
          <img src="/assets/incandescent-light-bulb.png">
        </div>
      </div>
      
      <div>
        Setup: {{lamp.setup}}
      </div>
      
      <div>
        <div class="ui two buttons">
          <div class="ui basic green button" (click)="zetAan()">Aan</div>
          <div class="ui basic red button" (click)="zetUit()">Uit</div>
        </div>
      </div>
      
    </div>
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

}
