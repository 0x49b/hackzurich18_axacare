import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

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


  constructor(private http: HttpClient) {
  }

  ngOnInit() {}


}
