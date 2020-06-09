import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingTwoComponent } from './calling-two.component';

describe('CallingTwoComponent', () => {
  let component: CallingTwoComponent;
  let fixture: ComponentFixture<CallingTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallingTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
