import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginInfo = {};
  signupInfo = {};
  user: any;
  error: string;
  myData: any;

  constructor(
    private mySession: SessionService,
    private myNavigator: Router
  ) { }

  ngOnInit() {
    this.mySession.isLoggedIn()
      .then(userInfo => this.user = userInfo);
  }

  login() {
    const thePromise = this.mySession.login(this.loginInfo);

    thePromise.then((userInfo) => {
      this.user = userInfo;
      this.error = null;
      this.myNavigator.navigate(['/home']);

    });

    thePromise.catch((err) => {
      this.user = null;
      // this.error = err;
      this.error = "Incorrect username or password";
      console.log("there was an err in login");
    });

  }

  signup() {
    const thePromise = this.mySession.signup(this.signupInfo);

    thePromise.then((userInfo) => {
      this.user = userInfo;
      this.error = null;
      this.myNavigator.navigate(['/login']);

    });

    thePromise.catch((err) => {
      this.user = null;
      this.error = err;
    });
  }

  logout() {
    this.mySession.logout()
      .then(() => {
        this.user = null;
        this.error = null;
      })
      .catch(err => this.error = err);
  }

  getPrivateData() {
    this.mySession.getPrivate()
      .then((data) => {
        this.myData = data;
        this.error = null;
      })
      .catch(err => this.error = err);
  }
}
