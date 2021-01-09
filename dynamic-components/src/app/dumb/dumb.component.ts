import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.scss'],
})
export class DumbComponent {
  @Input() title = 'initial title';

  constructor() {}
}
