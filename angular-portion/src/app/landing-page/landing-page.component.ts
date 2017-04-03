import { Component, OnInit } from '@angular/core';

import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  loginInfo = {};
  signupInfo = {};

  user: any;
  error: string;
  myData: any;

  constructor(private mySession: SessionService) { }

  ngOnInit() {
    this.mySession.isLoggedIn()
      .then(userInfo => this.user = userInfo);
  }

}
