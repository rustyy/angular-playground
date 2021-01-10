import { Type } from '@angular/core';

class ComponentRegistry {
  registry = new Map<string, any>();

  register<T>(ComponentClass: Type<T>) {
    this.registry.set(ComponentClass.name, ComponentClass);
  }

  get<T>(componentClassname: string): Type<T> {
    const cmpClass = this.registry.get(componentClassname);

    if (cmpClass) {
      return cmpClass;
    }

    throw Error('Unknown Component');
  }

  keys() {
    return this.registry.keys();
  }
}

export const componentRegistry = new ComponentRegistry();

export function registerComponent<T>(componentClass: Type<T>) {
  componentRegistry.register(componentClass);
}
