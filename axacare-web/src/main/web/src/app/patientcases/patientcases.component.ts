import {Component, OnInit} from '@angular/core';
import {ApiService} from "../_services/api.service";

@Component({
  selector: 'app-patientcases',
  templateUrl: './patientcases.component.html',
  styleUrls: ['./patientcases.component.css']
})
export class PatientcasesComponent implements OnInit {

  cases = [
    {
      "caseId": "2cd1",
      "caseTitle": "terrible headache",
      "caseOpened": "2018-09-15"
    },
    {
      "caseId": "1cc7",
      "caseTitle": "Shoulderpain",
      "caseOpened": "2018-09-15"
    },
    {
      "caseId": "5064",
      "caseTitle": "broken left leg",
      "caseOpened": "2018-09-15"
    },
    {
      "caseId": "a5f9",
      "caseTitle": "loss of power",
      "caseOpened": "2018-09-15"
    },
    {
      "caseId": "a570f",
      "caseTitle": "high ground",
      "caseOpened": "2018-09-15"
    }
  ];


  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    console.log(this.apiService.getOwnCases());

    console.log(this.cases);
  }

}
