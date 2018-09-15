import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {AuthGuard} from './_guards';
import {PatientdashboardComponent} from "./patientdashboard/patientdashboard.component";
import {DoctordashboardComponent} from "./doctordashboard/doctordashboard.component";
import {PharmacydashboardComponent} from "./pharmacydashboard/pharmacydashboard.component";
import {PatientcasesComponent} from "./patientcases/patientcases.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'patient', component: PatientdashboardComponent, canActivate: [AuthGuard]},
  {path: 'patientcases', component: PatientcasesComponent, canActivate: [AuthGuard]},

  {path: 'doctor', component: DoctordashboardComponent, canActivate: [AuthGuard]},
  {path: 'pharmacy', component: PharmacydashboardComponent, canActivate: [AuthGuard]},


  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
