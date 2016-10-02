import { Component } from '@angular/core';
import {Lamp} from "./lamp";

@Component({
  selector: 'app-root',
  template: `
    <div class="ui main container">

      <div class="ui grid">
       
        <div class="ui one column row">
          <app-scene></app-scene>
        </div>
        
        
          <div class="ui three column row">
            <app-lamp 
                *ngFor="let mlamp of lampen"
                [lamp]="mlamp">     
            </app-lamp>
          </div>  
      </div>
      
     </div>
  `
})
export class AppComponent {

  lampen: Lamp[];

  constructor() {
    this.lampen = [
      new Lamp("gang", false, "gedimd"),
      new Lamp("Keuken", false),
      new Lamp("Eetkamer", false)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement){
    console.log(`title: ${title.value} link: ${link.value}`);
  }

}
