import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserProfileService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(private myHttp: Http) { }
  get(id) {
    return this.myHttp.get(`${this.BASE_URL}/api/projects/${id}`)
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }
}
