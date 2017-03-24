import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private myHttp: Http) { }

  getList() {
    return this.myHttp.get(`${this.BASE_URL}/api/projects`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }

  addToList(newProject) {
    return this.myHttp.post(`${this.BASE_URL}/api/projects`, newProject)
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }

  get(id) {
    return this.myHttp.get(`${this.BASE_URL}/api/projects/${id}`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }

  remove(id) {
  return this.myHttp.delete(`${this.BASE_URL}/api/projects/${id}`)
  .toPromise()
  .then(apiResponse => apiResponse.json())
}
}
