import {Component, OnInit, ElementRef, AfterViewChecked, AfterViewInit, Input} from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'app-lampconfig',
  template: `

<div class="ui button">Show flowing popup</div>
<div class="ui flowing popup top left transition hidden">
  <div class="ui three column divided center aligned grid">
    <div class="column">
      <h4 class="ui header">Basic Plan</h4>
      <p><b>2</b> projects, $10 a month</p>
      <div class="ui button">Choose</div>
    </div>
    <div class="column">
      <h4 class="ui header">Business Plan</h4>
      <p><b>5</b> projects, $20 a month</p>
      <div class="ui button">Choose</div>
    </div>
    <div class="column">
      <h4 class="ui header">Premium Plan</h4>
      <p><b>8</b> projects, $25 a month</p>
      <div class="ui button">Choose</div>
    </div>
  </div>
</div>

    
  `,
  styleUrls: ['./lampconfig.component.css']
})
export class LampconfigComponent implements OnInit{

  @Input() toonconfig: boolean;
  @Input() lampnaam: string;
  @Input() configuratie: string;

  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit ' + this.lampnaam);
  }

}
