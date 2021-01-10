import { Component } from '@angular/core';
import { registerComponent } from '../component-registry/component-registry';

@registerComponent
@Component({
  selector: 'app-dumb2',
  templateUrl: './dumb2.component.html',
  styleUrls: ['./dumb2.component.scss'],
})
export class Dumb2Component {}
