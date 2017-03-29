import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { SessionService } from '../services/session.service';
import { UserProfileService } from '../services/user-profile.service'
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Array<any> = [];
  userProjects: Object = {};
  accepteePerson: any = {};

  errorMessage: String = '';

  constructor(
    private myProjectService: ProjectService,
    private mySession: SessionService,
    private myRoute: ActivatedRoute,
    private myNavigator: Router,
    private myUserService: UserProfileService
  ) { }

  ngOnInit() {
    this.myProjectService.getList()
    .then((projectsList) => {
      this.projects = projectsList;
    })
    .catch((err) => {
      this.errorMessage = "There was an error"
    })
    this.mySession.isLoggedIn()
    .then((user) => {
      this.accepteePerson = user;
    })
  }

acceptProject(item) {
  console.log('The project id is', item);
  const designer = this.accepteePerson;
  console.log('designer', designer);
    this.myProjectService.saveThisShitToThatShit(item, designer)
    .then((apiResult) => {
    })
  }

}
