import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project.service';
// import { FileSelectDirective, FileUploader } from "ng2-file-upload";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {


  // project: Array<any> = [];
  project: any = {
    name: '',
    mediaType: '',
    fileType: '',
    desc: '',
    images: '',
    colorOne: '',
    colorTwo: '',
    colorThree: '',
    requester: ''
  }

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
        console.log(this.project);
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
          this.myNavigator.navigate(['/project-list']);
        })
        .catch((err) => {
          console.log('Could not retrieve project details');
        });
    }

    contributeToProject() {
      // this.myProjectService.post(this.project['_id'])
      // this.uploader.uploadAll();
    }


  }
