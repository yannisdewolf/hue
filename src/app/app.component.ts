import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<div class="ui main text container">
    <form class="ui clearing form segment large">
      <h3 class="ui header">klik op de knop!</h3>
      
      <div class="field">
      <label for="title">Title:</label>
      <input name="title" #newtitle>
      </div>
      
      <div class="field">
      <label for="link">Link:</label>
      <input name="link" #newlink/>
      </div>
      
      <button class="ui positive right floated button" (click)="addArticle(newtitle, newlink)">Klik hierop</button>
    </form>
    </div>
  `
})
export class AppComponent {

  addArticle(title: HTMLInputElement, link: HTMLInputElement){
    console.log(`title: ${title.value} link: ${link.value}`);
  }

}
