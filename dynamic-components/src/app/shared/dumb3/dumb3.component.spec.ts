import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dumb3Component } from './dumb3.component';

describe('Dumb3Component', () => {
  let component: Dumb3Component;
  let fixture: ComponentFixture<Dumb3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dumb3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dumb3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
