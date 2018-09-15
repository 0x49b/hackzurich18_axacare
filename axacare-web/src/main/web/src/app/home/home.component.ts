import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {User} from '../_models';
import {UserService} from '../_services';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private user: UserService, private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {


    switch (this.user.getCurrentUserType()) {
      case 'patient':
        this.router.navigate(['/patient']);
        break;
      case 'doctor':
        this.router.navigate(['/doctor']);
        break;
      case 'pharmacy':
        this.router.navigate(['/pharmacy']);
        break;
      default:
        this.router.navigate(['/login']);
        break;
    }


  }

}
