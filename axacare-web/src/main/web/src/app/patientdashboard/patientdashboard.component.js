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
var _services_1 = require("../_services");
var PatientdashboardComponent = /** @class */ (function () {
    function PatientdashboardComponent(userService) {
        this.userService = userService;
        this.value = '';
    }
    PatientdashboardComponent.prototype.ngOnInit = function () {
        var user = this.userService.getCurrentUser();
        this.value = btoa(user);
    };
    PatientdashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-patientdashboard',
            templateUrl: './patientdashboard.component.html',
            styleUrls: ['./patientdashboard.component.css'],
        }),
        __metadata("design:paramtypes", [_services_1.UserService])
    ], PatientdashboardComponent);
    return PatientdashboardComponent;
}());
exports.PatientdashboardComponent = PatientdashboardComponent;
//# sourceMappingURL=patientdashboard.component.js.map