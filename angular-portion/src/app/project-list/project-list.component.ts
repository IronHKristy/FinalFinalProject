import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Array<any> = [];

  errorMessage: String = '';

  constructor(private myProjectService: ProjectService) { }

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
