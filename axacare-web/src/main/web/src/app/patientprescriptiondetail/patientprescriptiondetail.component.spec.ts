import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatientprescriptiondetailComponent} from './patientprescriptiondetail.component';

describe('PatientprescriptiondetailComponent', () => {
  let component: PatientprescriptiondetailComponent;
  let fixture: ComponentFixture<PatientprescriptiondetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientprescriptiondetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientprescriptiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
