import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientrecipedetailComponent } from './patientrecipedetail.component';

describe('PatientrecipedetailComponent', () => {
  let component: PatientrecipedetailComponent;
  let fixture: ComponentFixture<PatientrecipedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientrecipedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientrecipedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
