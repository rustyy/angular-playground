import { Component, ComponentFactoryResolver, OnInit, Type, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'host';

  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    this.viewContainerRef.clear();

    const subscription = this.loadEntry().subscribe((remoteEntry) => {
      this.renderComponent(remoteEntry.FirstComponent);
      subscription.unsubscribe();
    });
  }

  /**
   * Fetch the remote entry.
   */
  loadEntry(): Observable<any> {
    return from(
      loadRemoteModule({
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'remote',
        exposedModule: './FirstComponent',
      })
    );
  }

  /**
   * Create component instance and attach to current view container.
   */
  renderComponent<T>(ComponentClass: Type<T>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponentClass);
    this.viewContainerRef.createComponent(componentFactory);
  }
}
