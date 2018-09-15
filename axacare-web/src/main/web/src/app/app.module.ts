import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

// used to create fake backend
import {fakeBackendProvider} from './_helpers';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {AlertComponent} from './_directives';
import {AuthGuard} from './_guards';
import {JwtInterceptor, ErrorInterceptor} from './_helpers';
import {AlertService, AuthenticationService, UserService} from './_services';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {PatientdashboardComponent} from './patientdashboard/patientdashboard.component';
import {DoctordashboardComponent} from './doctordashboard/doctordashboard.component';
import {PharmacydashboardComponent} from './pharmacydashboard/pharmacydashboard.component';
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {NgxQRCodeModule} from "ngx-qrcode3";
import {PatientcasesComponent} from './patientcases/patientcases.component';
import {PatientprofileComponent} from './patientprofile/patientprofile.component';
import {PatientrecipesComponent} from './patientrecipes/patientrecipes.component';
import {PatienthelpComponent} from './patienthelp/patienthelp.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    AngularFontAwesomeModule,
    NgxQRCodeModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PatientdashboardComponent,
    DoctordashboardComponent,
    PharmacydashboardComponent,
    PatientcasesComponent,
    PatientprofileComponent,
    PatientrecipesComponent,
    PatienthelpComponent],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
