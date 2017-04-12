import { Component } from '@angular/core';
import { SessionService } from './services/session.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  }



}
