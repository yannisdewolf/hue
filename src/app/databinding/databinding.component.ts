import { Component } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent{
  stringInterpolation = 'This is string int';
  numberInterpolation = 1;

  onTest() {
    return true;
  }

}
