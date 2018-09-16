"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
// used to create fake backend
var _helpers_1 = require("./_helpers");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var _directives_1 = require("./_directives");
var _guards_1 = require("./_guards");
var _services_1 = require("./_services");
var home_1 = require("./home");
var login_1 = require("./login");
var register_1 = require("./register");
var patientdashboard_component_1 = require("./patientdashboard/patientdashboard.component");
var doctordashboard_component_1 = require("./doctordashboard/doctordashboard.component");
var pharmacydashboard_component_1 = require("./pharmacydashboard/pharmacydashboard.component");
var angular_font_awesome_1 = require("angular-font-awesome");
var ngx_qrcode3_1 = require("ngx-qrcode3");
var patientcases_component_1 = require("./patientcases/patientcases.component");
var patientprofile_component_1 = require("./patientprofile/patientprofile.component");
var patientprescriptions_component_1 = require("./patientprescriptions/patientprescriptions.component");
var patienthelp_component_1 = require("./patienthelp/patienthelp.component");
var patientprescriptiondetail_component_1 = require("./patientprescriptiondetail/patientprescriptiondetail.component");
var patientnewcase_component_1 = require("./patientnewcase/patientnewcase.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                app_routing_1.routing,
                angular_font_awesome_1.AngularFontAwesomeModule,
                ngx_qrcode3_1.NgxQRCodeModule
            ],
            declarations: [
                app_component_1.AppComponent,
                _directives_1.AlertComponent,
                home_1.HomeComponent,
                login_1.LoginComponent,
                register_1.RegisterComponent,
                patientdashboard_component_1.PatientdashboardComponent,
                doctordashboard_component_1.DoctordashboardComponent,
                pharmacydashboard_component_1.PharmacydashboardComponent,
                patientcases_component_1.PatientcasesComponent,
                patientprofile_component_1.PatientprofileComponent,
                patientprescriptions_component_1.PatientprescriptionsComponent,
                patienthelp_component_1.PatienthelpComponent,
                patientprescriptiondetail_component_1.PatientprescriptiondetailComponent,
                patientnewcase_component_1.PatientnewcaseComponent,
            ],
            providers: [
                _guards_1.AuthGuard,
                _services_1.AlertService,
                _services_1.AuthenticationService,
                _services_1.UserService,
                { provide: http_1.HTTP_INTERCEPTORS, useClass: _helpers_1.JwtInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: _helpers_1.ErrorInterceptor, multi: true },
                // provider used to create fake backend
                _helpers_1.fakeBackendProvider
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map