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
var PatientprescriptionsComponent = /** @class */ (function () {
    function PatientprescriptionsComponent() {
        this.prescriptions = [
            {
                "prescriptionId": 21,
                "prescriptionDate": "2018-10-14",
                "prescriptionDoctor": "Angelique Alston",
                "prescriptionItems": [
                    {
                        "prescriptionItemId": 35,
                        "prescriptionItemName": "Maureen",
                        "prescriptionItemDosage": "50mg",
                        "prescriptionItemDays": 20
                    },
                    {
                        "prescriptionItemId": 26,
                        "prescriptionItemName": "Barron",
                        "prescriptionItemDosage": "50mg",
                        "prescriptionItemDays": 20
                    }
                ]
            },
            {
                "prescriptionId": 30,
                "prescriptionDate": "2018-10-15",
                "prescriptionDoctor": "Heidi West",
                "prescriptionItems": [
                    {
                        "prescriptionItemId": 31,
                        "prescriptionItemName": "Martina",
                        "prescriptionItemDosage": "500mg",
                        "prescriptionItemDays": 4
                    },
                    {
                        "prescriptionItemId": 21,
                        "prescriptionItemName": "Francesca",
                        "prescriptionItemDosage": "50mg",
                        "prescriptionItemDays": 4
                    }
                ]
            },
            {
                "prescriptionId": 24,
                "prescriptionDate": "2018-10-15",
                "prescriptionDoctor": "Larsen Benjamin",
                "prescriptionItems": [
                    {
                        "prescriptionItemId": 40,
                        "prescriptionItemName": "Dodson",
                        "prescriptionItemDosage": "500mg",
                        "prescriptionItemDays": 20
                    }
                ]
            },
            {
                "prescriptionId": 32,
                "prescriptionDate": "2018-10-15",
                "prescriptionDoctor": "Josephine Bruce",
                "prescriptionItems": [
                    {
                        "prescriptionItemId": 25,
                        "prescriptionItemName": "Livingston",
                        "prescriptionItemDosage": "50mg",
                        "prescriptionItemDays": 20
                    },
                    {
                        "prescriptionItemId": 33,
                        "prescriptionItemName": "Blanche",
                        "prescriptionItemDosage": "50mg",
                        "prescriptionItemDays": 20
                    },
                    {
                        "prescriptionItemId": 23,
                        "prescriptionItemName": "Lopez",
                        "prescriptionItemDosage": "50mg",
                        "prescriptionItemDays": 20
                    }
                ]
            },
            {
                "prescriptionId": 25,
                "prescriptionDate": "2018-10-14",
                "prescriptionDoctor": "Shawna Glenn",
                "prescriptionItems": [
                    {
                        "prescriptionItemId": 38,
                        "prescriptionItemName": "Robles",
                        "prescriptionItemDosage": "50mg",
                        "prescriptionItemDays": 20
                    }
                ]
            }
        ];
    }
    PatientprescriptionsComponent.prototype.ngOnInit = function () {
    };
    PatientprescriptionsComponent = __decorate([
        core_1.Component({
            selector: 'app-patientprescriptions',
            templateUrl: './patientprescriptions.component.html',
            styleUrls: ['./patientprescriptions.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], PatientprescriptionsComponent);
    return PatientprescriptionsComponent;
}());
exports.PatientprescriptionsComponent = PatientprescriptionsComponent;
//# sourceMappingURL=patientprescriptions.component.js.map