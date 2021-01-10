import { Injectable } from '@angular/core';
import { componentRegistry } from './component-registry';

@Injectable({
  providedIn: 'root',
})
export class RegistryService {
  get(componentClassName: string) {
    return componentRegistry.get(componentClassName);
  }

  keys() {
    return componentRegistry.keys();
  }
}
