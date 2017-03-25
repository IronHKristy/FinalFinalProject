import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-request',
  templateUrl: './project-request.component.html',
  styleUrls: ['./project-request.component.css']
})
export class ProjectRequestComponent implements OnInit {
  formInfo = {
    name: '',
    mediaType: '',
    fileType: '',
    desc: '',
    images: '',
    colorOne: '',
    colorTwo: '',
    colorThree: ''
  };


  constructor(private myProjectService: ProjectService) { }

  ngOnInit() {
  }

  addProject(newProject) {
    console.log(this.formInfo);
    this.myProjectService.addToList(this.formInfo)
    .then((apiResult) => {
      console.log(apiResult);
    })
    .catch((err) => {
      console.log("Broke in request component", err);
    })
  }
}
