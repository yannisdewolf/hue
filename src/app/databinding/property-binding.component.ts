import { Component } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'fa-property-binding',
  template: `
    {{result}}<br>
    
    
    
  `,
  styles: []
})
export class PropertyBindingComponent {
  @Input() result : number = 0;

}
