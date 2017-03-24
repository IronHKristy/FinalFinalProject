import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project: Object;

  constructor(
    private myRoute: ActivatedRoute,
    private myProjectService: ProjectService,
    private myNavigator: Router
  ) { }

  ngOnInit() {
    this.myRoute.params.subscribe((params) => {
      this.getProjectDetails(params['id']);
    });
  }

  getProjectDetails(id) {
    this.myProjectService.get(id)
    .then((theProjectDetails) => {
      this.project = theProjectDetails;
    })

    .catch((err) => {
      console.log("There was an error", err);
    });
  }

  deleteProject() {
    if (!window.confirm("Are you sure you want to delete this project?")) {
      return;
    }
    this.myProjectService.remove(this.project['_id'])
      .then(() => {
        this.myNavigator.navigate(['/']);
      })
      .catch((err) => {
        console.log('Could not retrieve project details');
      });
  }


}
