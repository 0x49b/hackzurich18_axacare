"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_service_1 = require("../_services/api.service");
var DoctordashboardComponent = /** @class */ (function () {
    function DoctordashboardComponent(api, cdr) {
        this.api = api;
        this.cdr = cdr;
        this.patients = [];
    }
    DoctordashboardComponent.prototype.ngOnInit = function () {
        //this.readUserListForPatients();
        this.actualPatient = 0;
        console.log(this.patients);
    };
    DoctordashboardComponent.prototype.searchDrugs = function (title) {
        if (title.length > 3) {
            this.drugs = this.api.searchForDrug(title);
            this.cdr.detectChanges();
        }
    };
    DoctordashboardComponent.prototype.readUserListForPatients = function () {
        var users = JSON.parse(localStorage.getItem('users'));
        var patientType = 'patient';
        var result = users.find(function (patient) { return patient.type === patientType; });
        this.patients.push(result);
    };
    DoctordashboardComponent.prototype.choosePatient = function (patientId) {
        this.actualPatient = patientId;
        this.updateCasesForPatient(patientId);
    };
    DoctordashboardComponent.prototype.updateCasesForPatient = function (patientId) {
        var cases = this.api.getCasesForPatient(patientId);
        console.log(cases);
    };
    DoctordashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-doctordashboard',
            templateUrl: './doctordashboard.component.html',
            styleUrls: ['./doctordashboard.component.css']
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, core_1.ChangeDetectorRef])
    ], DoctordashboardComponent);
    return DoctordashboardComponent;
}());
exports.DoctordashboardComponent = DoctordashboardComponent;
//# sourceMappingURL=doctordashboard.component.js.map