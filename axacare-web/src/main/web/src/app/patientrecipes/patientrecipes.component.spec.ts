import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientrecipesComponent } from './patientrecipes.component';

describe('PatientrecipesComponent', () => {
  let component: PatientrecipesComponent;
  let fixture: ComponentFixture<PatientrecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientrecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
