import { Component, OnInit } from '@angular/core';
import {UserService} from "../_services";

@Component({
  selector: 'app-patientdashboard',
  templateUrl: './patientdashboard.component.html',
  styleUrls: ['./patientdashboard.component.css'],
})

export class PatientdashboardComponent implements OnInit {

  user:string;
  elementType : 'canvas';
  value: string = '';

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    let user =this.userService.getCurrentUser();
    this.value = btoa(user);
  }

}
