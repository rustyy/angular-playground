import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { DumbComponent } from '../dumb/dumb.component';

@Component({
  selector: 'app-dyn-wrapper',
  template: '',
})
export class DynWrapperComponent implements OnInit {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    this.viewContainerRef.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      DumbComponent
    );

    const componentRef = this.viewContainerRef.createComponent(
      componentFactory
    );

    componentRef.instance.title = 'Title set by parent';
  }
}
