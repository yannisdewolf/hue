import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lamplist',
  template: `
     <div class="ui items">
          <app-lamp 
            *ngFor="let lamp of lamplijst" 
            [lamp] = "lamp"
            >
          </app-lamp>
      </div>
  `,
  styleUrls: ['./lamplist.component.css'],
  inputs: ['lamplijst']
})
export class LamplistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
