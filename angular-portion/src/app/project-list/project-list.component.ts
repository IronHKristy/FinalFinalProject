import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { SessionService } from '../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  // items: Object;
  projects: Array<any> = [];

  errorMessage: String = '';

  constructor(
    private myProjectService: ProjectService,
    private mySession: SessionService,
    private myRoute: ActivatedRoute,
    private myNavigator: Router
  ) { }

  ngOnInit() {
    this.myProjectService.getList()
    .then((projectsList) => {
      this.projects = projectsList;
    })
    .catch((err) => {
      this.errorMessage = "There was an error"
    })
  }

}



// import { Component, OnInit } from '@angular/core';
// import { ScheduleService } from '../services/schedule.service';
// import { SessionService } from '../services/session.service';
// import { Router, ActivatedRoute } from '@angular/router';
//
// @Component({
//   selector: 'app-schedule',
//   templateUrl: './schedule.component.html',
//   styleUrls: ['./schedule.component.css']
// })
// export class ScheduleComponent implements OnInit {
//   //The item that will be queried from this component's service
//   items: Object;
//   //Store any errors that are generated
//   errorMessage:         string;
//   calendars: Array<any> = [];
//
//   constructor(
//     private myService: ScheduleService,
//     private mySession: SessionService,
//     private myRoute: ActivatedRoute,
//     private myNavigator: Router
//   ) { }
//
//   ngOnInit() {
//     // this.myRoute.params.subscribe((params) => {
//     //   this.getDetails(params['id']);
//     // });
//     this.myService.getList()
//       .then((item) => {
//         this.calendars = item;
//       })
//   }
