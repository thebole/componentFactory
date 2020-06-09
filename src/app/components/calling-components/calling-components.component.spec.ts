import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingComponentsComponent } from './calling-components.component';

describe('CallingComponentsComponent', () => {
  let component: CallingComponentsComponent;
  let fixture: ComponentFixture<CallingComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallingComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
