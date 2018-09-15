import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientcasesComponent } from './patientcases.component';

describe('PatientcasesComponent', () => {
  let component: PatientcasesComponent;
  let fixture: ComponentFixture<PatientcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
