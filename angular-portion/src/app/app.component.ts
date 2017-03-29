import { Component } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  user: any;

  constructor(private mySession: SessionService) { }

  ngOnInit() {
    this.mySession.isLoggedIn()
      .then(userInfo => this.user = userInfo);
  }

}
