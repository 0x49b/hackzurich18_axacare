import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatienthelpComponent} from './patienthelp.component';

describe('PatienthelpComponent', () => {
  let component: PatienthelpComponent;
  let fixture: ComponentFixture<PatienthelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatienthelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatienthelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
