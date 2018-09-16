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
  cases: object = [];
  drugs: any = [];



  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.readUserListForPatients();
    console.log(this.patients);
  }


  searchDrugs(title: string) {
    if (title.length > 3) {
      this.drugs = this.api.searchForDrug(title).subscribe(
        (data: any) => {
          this.drugs = data;
        }
      );
    }
    else {
      this.drugs = [];
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

  resetActualPatient(){
    this.actualPatient = null;
  }

  updateCasesForPatient(patientId: number) {
    this.api.getCasesForPatient(patientId)
      .then(data => data.json())
      .then(data => this.cases = data.filter((obj: any) => obj.patient == patientId));


  }

  getActualPatient() {
    return this.patients.find((patient: any) => patient.id === this.actualPatient);
  }

}


