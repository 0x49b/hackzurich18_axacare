import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../_services/api.service";

@Component({
  selector: 'app-patientcases',
  templateUrl: './patientcases.component.html',
  styleUrls: ['./patientcases.component.css']
})
export class PatientcasesComponent implements OnInit {

  cases:any;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.cases = this.api.getAllCases();
  }


}
