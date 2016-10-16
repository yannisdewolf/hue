import { Component } from '@angular/core';
import {Lamp} from "./lamp";

@Component({
  selector: 'app-root',
  template: `
    <div class="ui main container">

      

      <app-lamplist></app-lamplist>

      <div class="ui grid">
       
        <div class="ui one column row">
          <app-scene
            [bestaandeconfigs] = configuraties
            (onNewConfig)="addconfiguration($event)"  
          >
        </app-scene>
        </div>
        
        
          <div class="ui one column row">
            <div class="column">
              <div class="ui special cards">
                <app-lamp 
                    *ngFor="let mlamp of lampen"
                    [lamp]="mlamp"
                    [configuraties]=configuraties>     
                </app-lamp>
              </div>
            </div>
          </div>  
      </div>
      
     
      
     </div>
  `
})
export class AppComponent {

  lampen: Lamp[];

  configuraties: [string];

  constructor() {
    this.lampen = [
      new Lamp("Gang", false),
      new Lamp("Keuken", false),
      new Lamp("Eetkamer", false)
    ];

    this.configuraties = [
      'gedimd', 'wit'
    ]
  }

  addconfiguration(newconfig: string) {
    console.log(`incoming config: ${newconfig}`)
    this.configuraties.push(newconfig);
  }


}
