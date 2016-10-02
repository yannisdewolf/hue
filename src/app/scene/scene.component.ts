import { Component } from '@angular/core';

@Component({
  selector: 'app-scene',
  host: {
    class: 'column'
  },
  template: `
    <form class="ui clearing segment form">
        <h3 class="ui header">Configuratie</h3>
             
        <div class="field">
          <label for="title">Naam:</label>
          <input name="title" #newNaam>
        </div>
        
        <div class="field">
          <label for="omschrijving">Omschrijving:</label>
          <input name="omschrijving" #newDescription />
        </div>
        
        <div class="field">
          <label for="configuratie">Configuratie:</label>
          <textarea name="configuratie" #newSetupString></textarea>
        </div>
        
        <div class="ui positive button right floated" (click)="addSetup(newNaam, newSetupString, newDescription)">Bewaar</div>
      </form>
  `,
  styleUrls: ['./scene.component.css']
})
export class SceneComponent {


  name: string;
  setupstring: string;
  description: string;

  constructor() {

  }


  addSetup(name: HTMLInputElement, setupstring: HTMLInputElement, description: HTMLInputElement) {
    this.name = name.value;
    this.setupstring = setupstring.value;
    this.description = description.value;
  }
}
