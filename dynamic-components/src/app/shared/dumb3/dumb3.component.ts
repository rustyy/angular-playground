import { Component } from '@angular/core';
import { registerComponent } from '../component-registry/component-registry';

@registerComponent
@Component({
  selector: 'app-dumb3',
  templateUrl: './dumb3.component.html',
  styleUrls: ['./dumb3.component.scss'],
})
export class Dumb3Component {
  constructor() {}
}
