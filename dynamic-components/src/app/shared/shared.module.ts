import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DumbComponent } from './dumb/dumb.component';
import { Dumb2Component } from './dumb2/dumb2.component';
import { Dumb3Component } from './dumb3/dumb3.component';
import { DynWrapperComponent } from './dyn-wrapper/dyn-wrapper.component';

@NgModule({
  declarations: [
    DumbComponent,
    Dumb2Component,
    Dumb3Component,
    DynWrapperComponent,
  ],
  imports: [CommonModule],
  exports: [DumbComponent, Dumb2Component, Dumb3Component, DynWrapperComponent],
})
export class SharedModule {}
