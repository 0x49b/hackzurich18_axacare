"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var patientprescriptiondetail_component_1 = require("./patientprescriptiondetail.component");
describe('PatientprescriptiondetailComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [patientprescriptiondetail_component_1.PatientprescriptiondetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(patientprescriptiondetail_component_1.PatientprescriptiondetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=patientprescriptiondetail.component.spec.js.map