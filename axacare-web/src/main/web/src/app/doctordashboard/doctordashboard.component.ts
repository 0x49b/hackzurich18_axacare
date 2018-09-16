import {ChangeDetectorRef, Component, Input, OnInit, Output} from '@angular/core';
import {ApiService} from "../_services/api.service";
import {delay} from "rxjs/operators";
import {error} from "util";

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.css']
})
export class DoctordashboardComponent implements OnInit {

  patients: any = [];
  actualPatient: number;
  cases: any;
  drugs: any;

  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.readUserListForPatients();
    console.log(this.patients);
  }


  searchDrugs(title: string) {
    if (title.length > 3) {
      this.drugs = this.api.searchForDrug(title);
      this.cdr.detectChanges();
    }
  }

  readUserListForPatients() {
    let users = JSON.parse(localStorage.getItem('users'));
    let patientType = 'patient';
    let result = users.find((patient: any) => patient.type === patientType);
    this.patients.push(result);
  }

  choosePatient(patientId: number) {
    this.actualPatient = patientId;
    this.updateCasesForPatient(patientId);
  }

  updateCasesForPatient(patientId: number) {
    let cases = this.api.getCasesForPatient(patientId);
    console.log(cases);
  }

}


