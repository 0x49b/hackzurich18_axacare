"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_1 = require("./home");
var login_1 = require("./login");
var register_1 = require("./register");
var _guards_1 = require("./_guards");
var patientdashboard_component_1 = require("./patientdashboard/patientdashboard.component");
var doctordashboard_component_1 = require("./doctordashboard/doctordashboard.component");
var pharmacydashboard_component_1 = require("./pharmacydashboard/pharmacydashboard.component");
var patientcases_component_1 = require("./patientcases/patientcases.component");
var patientprofile_component_1 = require("./patientprofile/patientprofile.component");
var patientprescriptions_component_1 = require("./patientprescriptions/patientprescriptions.component");
var patienthelp_component_1 = require("./patienthelp/patienthelp.component");
var patientnewcase_component_1 = require("./patientnewcase/patientnewcase.component");
var patientprescriptiondetail_component_1 = require("./patientprescriptiondetail/patientprescriptiondetail.component");
var appRoutes = [
    { path: '',
        component: home_1.HomeComponent,
        canActivate: [_guards_1.AuthGuard],
        data: {
            expectedType: ['patient', 'doctor', 'pharmacy']
        } },
    {
        path: 'patient',
        component: patientdashboard_component_1.PatientdashboardComponent,
        canActivate: [_guards_1.AuthGuard],
        data: {
            expectedType: ['patient']
        }
    },
    {
        path: 'patientcases',
        component: patientcases_component_1.PatientcasesComponent,
        canActivate: [_guards_1.AuthGuard],
        data: {
            expectedType: ['patient']
        }
    },
    {
        path: 'patientnewcase',
        component: patientnewcase_component_1.PatientnewcaseComponent,
        canActivate: [_guards_1.AuthGuard],
        data: {
            expectedType: ['patient']
        }
    },
    {
        path: 'patientprofile',
        component: patientprofile_component_1.PatientprofileComponent,
        canActivate: [_guards_1.AuthGuard],
        data: {
            expectedType: ['patient']
        }
    },
    {
        path: 'patientprescriptions',
        component: patientprescriptions_component_1.PatientprescriptionsComponent,
        canActivate: [_guards_1.AuthGuard],
        data: {
            expectedType: ['patient']
        }
    },
    {
        path: 'patientprescriptiondetail/:id',
        component: patientprescriptiondetail_component_1.PatientprescriptiondetailComponent,
        canActivate: [_guards_1.AuthGuard],
        data: {
            expectedType: ['patient']
        }
    },
    {
        path: 'patienthelp',
        component: patienthelp_component_1.PatienthelpComponent,
        canActivate: [_guards_1.AuthGuard],
        data: {
            expectedType: ['patient']
        }
    },
    {
        path: 'doctor',
        component: doctordashboard_component_1.DoctordashboardComponent,
        canActivate: [_guards_1.AuthGuard],
        data: {
            expectedType: ['doctor']
        }
    },
    {
        path: 'pharmacy',
        component: pharmacydashboard_component_1.PharmacydashboardComponent,
        canActivate: [_guards_1.AuthGuard],
        data: {
            expectedType: ['pharmacy']
        }
    },
    { path: 'login', component: login_1.LoginComponent },
    { path: 'register', component: register_1.RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map