import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectService {
  BASE_URL: string = '';
  // BASE_URL: string = 'http://localhost:3000';
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

  saveThisShitToThatShit(item, id) {
    const options = {withCredentials: true };
    const userId = id._id;
    console.log(`${this.BASE_URL}/projects/${item}/${userId}`)
    return this.myHttp.post(`${this.BASE_URL}/api/projects/${item}/${userId}`, item, options)
      .toPromise()
      .then(apiResponse => {
        console.log('projects', apiResponse);
        console.log('user._id', id._id);
        return apiResponse;
      })
      .catch((err) => {
        return err;
      })
  }

  getThatShitForThatShit() {
      return this.myHttp.get(`${this.BASE_URL}/api/projects/user`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }
}
