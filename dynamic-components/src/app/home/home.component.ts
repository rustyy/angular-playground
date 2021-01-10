import { Component, OnInit } from '@angular/core';
import { RegistryService } from '../shared/component-registry/registry.service';
import { componentRegistry } from '../shared/component-registry/component-registry';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private componentRegistry: RegistryService) {}

  ngOnInit(): void {
    console.log(componentRegistry.keys());
  }
}
