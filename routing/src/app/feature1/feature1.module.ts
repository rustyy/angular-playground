import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { EntryComponent } from './components/entry/entry.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';


@NgModule({
  declarations: [EntryComponent, FirstComponent, SecondComponent],
  imports: [
    CommonModule,
    Feature1RoutingModule
  ]
})
export class Feature1Module { }
