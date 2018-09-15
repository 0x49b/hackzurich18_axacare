import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientprescriptionsComponent } from './patientprescriptions.component';

describe('PatientprescriptionsComponent', () => {
  let component: PatientprescriptionsComponent;
  let fixture: ComponentFixture<PatientprescriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientprescriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientprescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
