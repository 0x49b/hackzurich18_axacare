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
var router_1 = require("@angular/router");
var PatientprescriptiondetailComponent = /** @class */ (function () {
    function PatientprescriptiondetailComponent(route) {
        this.route = route;
        this.prescriptions = [
            {
                "prescriptionId": 21,
                "prescriptionDate": "2018-10-14",
                "prescriptionDoctor": "Angelique Alston",
                "prescriptionItems": [
                    {
                        "prescriptionItemId": 35,
                        "prescriptionItemName": "Voltaren Dolo forte 25 mg Dragées",
                        "prescriptionItemDosage": "25mg",
                        "prescriptionItemDays": 20
                    },
                    {
                        "prescriptionItemId": 26,
                        "prescriptionItemName": "Aspirin® Complex",
                        "prescriptionItemDosage": "-",
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
                        "prescriptionItemName": "Panadol® Extra",
                        "prescriptionItemDosage": "-",
                        "prescriptionItemDays": 4
                    },
                    {
                        "prescriptionItemId": 21,
                        "prescriptionItemName": " OMIDA® Stimmungsschwankungsglobuli",
                        "prescriptionItemDosage": "-",
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
                        "prescriptionItemName": "DAFALGAN® Pulver für Kinder",
                        "prescriptionItemDosage": "-",
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
                        "prescriptionItemName": "Furadantin® retard",
                        "prescriptionItemDosage": "-",
                        "prescriptionItemDays": 20
                    },
                    {
                        "prescriptionItemId": 33,
                        "prescriptionItemName": "Antidry® wash",
                        "prescriptionItemDosage": "-",
                        "prescriptionItemDays": 20
                    },
                    {
                        "prescriptionItemId": 23,
                        "prescriptionItemName": "Ceteco® Sandoz Filmtabletten",
                        "prescriptionItemDosage": "-",
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
                        "prescriptionItemName": "Aspirin Cardio® 100/300",
                        "prescriptionItemDosage": "300mg",
                        "prescriptionItemDays": 20
                    }
                ]
            }
        ];
    }
    PatientprescriptiondetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            var result = _this.prescriptions.find(function (prescription) { return prescription.prescriptionId === _this.id; });
            _this.prescription = result;
            console.log(result);
        });
    };
    PatientprescriptiondetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PatientprescriptiondetailComponent = __decorate([
        core_1.Component({
            selector: 'app-patientprescriptiondetail',
            templateUrl: './patientprescriptiondetail.component.html',
            styleUrls: ['./patientprescriptiondetail.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], PatientprescriptiondetailComponent);
    return PatientprescriptiondetailComponent;
}());
exports.PatientprescriptiondetailComponent = PatientprescriptiondetailComponent;
//# sourceMappingURL=patientprescriptiondetail.component.js.map