import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Injectable,
  Type,
} from '@angular/core';
import { RegistryService } from './shared/component-registry/registry.service';

export interface Data<T> {
  title: string;
  content: string;
  componentFactory: ComponentFactory<T>;
}

@Injectable({
  providedIn: 'root',
})
export class EndpointService {
  constructor(
    private registry: RegistryService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  fetch(): Data<any>[] {
    return [
      {
        title: 'A title 1',
        content: 'Some content',
        componentFactory: this.componentFactoryResolver.resolveComponentFactory(
          this.registry.get('Dumb2Component')
        ),
      },
      {
        title: 'A title 2',
        content: 'Some content',
        componentFactory: this.componentFactoryResolver.resolveComponentFactory(
          this.registry.get('Dumb3Component')
        ),
      },
    ];
  }
}
