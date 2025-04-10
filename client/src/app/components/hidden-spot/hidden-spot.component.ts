import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hidden-spot',
  imports: [],
  templateUrl: './hidden-spot.component.html',
})
export class HiddenSpotComponent {
  @Input() spotData: any;
}
