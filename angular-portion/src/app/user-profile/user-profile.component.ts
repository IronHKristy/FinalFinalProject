import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  theUser: any = {};
  lists: Array<any> = [];
  errorMessage: String = '';

  constructor(
    private myRoute: ActivatedRoute,
    private myNavigator: Router,
    private mySession: SessionService,
    private myProjectService: ProjectService
  ) { }

  ngOnInit() {
    this.mySession.isLoggedIn()
    .then((user) => {
      this.theUser = user;
    })
  }

  // showProject() {
  //   this.myProjectService.getThatShitForThatShit()
  //   .then((projectsList) => {
  //     this.projects = projectsList;
  //     console.log(projectsList);
  //   })
  //   .catch((err) => {
  //     this.errorMessage = "Error in user-profile-component"
  //   })
  // }

  showProject() {
    this.myProjectService.getThatShitForThatShit()
    .then((projectsList) => {
      this.lists = projectsList;
      console.log(projectsList);
    })
    .catch((err) => {
      this.errorMessage = "Error in user profile component ts"
    })
  }
}

// items: Object;
//   //Store any errors that are generated
//   errorMessage:         string;
//   calendars: Array<any> = [];
//
//   constructor(
//     private myService:  ScheduleService,
//     private mySession:  SessionService,
//     private myRoute:    ActivatedRoute,
//     private myNavigator:Router
//   ) { }
//
//   ngOnInit() {
//
//     this.myService.getList()
//       .then((item) => {
//         this.calendars = item;
//       })
