import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../services/session.service';
import { ProjectService } from '../services/project.service';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-project-request',
  templateUrl: './project-request.component.html',
  styleUrls: ['./project-request.component.css']
})
export class ProjectRequestComponent implements OnInit {
  date: Object;
  person: any = {};
  formInfo: any = {
    name: '',
    mediaType: '',
    fileType: '',
    desc: '',
    images: '',
    colorOne: '',
    colorTwo: '',
    colorThree: '',
    requester: ''
  };


  constructor(
    private myProjectService: ProjectService,
    private myNavigator: Router,
    private mySession: SessionService
  ) { }

  ngOnInit() {
    this.mySession.isLoggedIn()
      .then((user) => {
        this.person = user;
      })
  }

  addProject() {
    this.formInfo.id = this.person._id;
    this.formInfo.user = this.person._id;
    console.log('person', this.person._id);
    this.myProjectService.addToList(this.formInfo)
    .then((apiResult) => {
      this.myNavigator.navigate(['/project-list']);
    })
    .catch((err) => {
      console.log("Broke in request component", err);
    })
  }


  isloggedin() {
    this.mySession.isLoggedIn();
  }
}


// --------------------------------------
// import { Component, OnInit } from '@angular/core';
// import { SessionService } from '../services/session.service';
// import { ScheduleService } from '../services/schedule.service';
//
// @Component({
//   selector: 'app-schedule-new',
//   templateUrl: './schedule-new.component.html',
//   styleUrls: ['./schedule-new.component.css']
// })
//
// export class ScheduleNewComponent implements OnInit {
//   date: Object;
//   formInfo              = {
//     date:               '',
//     time:               '',
//     duration:           '',
//     location:           'Miami, FL',
//     instrument:         '',
//     slotAvailable:      false
//   };
//   constructor(
//     private myService: ScheduleService,
//     private mySession: SessionService
//   ) { }
//
//   ngOnInit() {
//   }
//   mySchedule() {
//     this.myService.myClass()
//       .then((apiResult) => {
//         console.log(apiResult);
//       })
//       .catch((err) => {
//         console.log('Error while retrieving your list of classes.', err);
//       })
//   }
//   createNewItem(thing) {
//     this.myService.createItem(this.formInfo)
//       .then((apiResult) => {
//         console.log(apiResult);
//       })
//       .catch((err) => {
//         console.log('Error creating calendar item ', err);
//       })
//
//   }
//   isLoggedIn() {
//     const theObserve = this.mySession.isLoggedIn();
//
//     theObserve.subscribe(
//       result => console.log('success!!!!!!', result),
//       err => console.log('failure!!!!!!', err)
//     );
//
//   }
//
// }
