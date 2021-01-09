import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynWrapperComponent } from './dyn-wrapper.component';

describe('DynWrapperComponent', () => {
  let component: DynWrapperComponent;
  let fixture: ComponentFixture<DynWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
