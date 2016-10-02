import { Component } from '@angular/core';
import {Lamp} from "../lamp";

@Component({
  selector: 'app-lamp',
  host: {
    class: 'column'
  },
  inputs: ['lamp'],
  template: `  
    <div class="ui segment">   
     
      <div>
        <div class="ui header">{{lamp.lampNaam}}</div>
      </div>
      
      <div class="content">
        <div class="ui image small">
          <img src="/assets/incandescent-light-bulb.png">
        </div>
      </div>
      
      <div class="meta">
        Setup: {{lamp.setup}}
      </div>
      
      <div >
        <div class="ui two buttons">
          <div class="ui basic green button" (click)="zetAan()">Aan</div>
          <div class="ui basic red button" (click)="zetUit()">Uit</div>
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
