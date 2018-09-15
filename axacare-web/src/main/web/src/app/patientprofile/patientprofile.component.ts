import {Component, OnInit} from '@angular/core';
import {UserService} from "../_services";

@Component({
  selector: 'app-patientprofile',
  templateUrl: './patientprofile.component.html',
  styleUrls: ['./patientprofile.component.css']
})
export class PatientprofileComponent implements OnInit {

  user:any;
  userimage:string;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = JSON.parse(this.userService.getCurrentUser());
    this.userimage = this.user.image;
  }


}
