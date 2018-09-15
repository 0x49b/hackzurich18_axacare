import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {AuthGuard} from './_guards';
import {PatientdashboardComponent} from "./patientdashboard/patientdashboard.component";
import {DoctordashboardComponent} from "./doctordashboard/doctordashboard.component";
import {PharmacydashboardComponent} from "./pharmacydashboard/pharmacydashboard.component";
import {PatientcasesComponent} from "./patientcases/patientcases.component";
import {PatientprofileComponent} from "./patientprofile/patientprofile.component";
import {PatientrecipesComponent} from "./patientrecipes/patientrecipes.component";
import {PatienthelpComponent} from "./patienthelp/patienthelp.component";
import {PatientnewcaseComponent} from "./patientnewcase/patientnewcase.component";

const appRoutes: Routes = [
  {path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      expectedType: ['patient', 'doctor', 'pharmacy']
    }},



  {
    path: 'patient',
    component: PatientdashboardComponent,
    canActivate: [AuthGuard],
    data: {
      expectedType: ['patient']
    }
  },
  {
    path: 'patientcases',
    component: PatientcasesComponent,
    canActivate: [AuthGuard],
    data: {
      expectedType:['patient']
    }
  },
  {
    path: 'patientnewcase',
    component: PatientnewcaseComponent,
    canActivate: [AuthGuard],
    data: {
      expectedType:['patient']
    }
  },
  {
    path: 'patientprofile',
    component: PatientprofileComponent,
    canActivate: [AuthGuard],
    data: {
      expectedType: ['patient']
    }
  },
  {
    path: 'patientrecipes',
    component: PatientrecipesComponent,
    canActivate: [AuthGuard],
    data: {
      expectedType:['patient']
    }
  },
  {
    path: 'patienthelp',
    component: PatienthelpComponent,
    canActivate: [AuthGuard],
    data: {
      expectedType: ['patient']
    }
  },







  {
    path: 'doctor',
    component: DoctordashboardComponent,
    canActivate: [AuthGuard],
    data: {
      expectedType: ['doctor']
    }
  },






  {
    path: 'pharmacy',
    component: PharmacydashboardComponent,
    canActivate: [AuthGuard],
    data: {
      expectedType: ['pharmacy']
    }
  },






  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
