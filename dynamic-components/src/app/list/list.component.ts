import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { EndpointService, Data } from '../endpoint.service';

@Component({
  selector: 'app-list',
  template: '',
})
export class ListComponent implements OnInit {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private endpoint: EndpointService
  ) {}

  ngOnInit(): void {
    const items = this.endpoint.fetch();

    for (const item of items) {
      this.viewContainerRef.createComponent(item.componentFactory);
    }
  }
}
