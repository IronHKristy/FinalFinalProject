import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectRequestComponent } from './project-request/project-request.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component'
import { UserLoginComponent } from './user-login/user-login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'project-request',
    component: ProjectRequestComponent
  },
  {
    path: 'project-details/:id',
    component: ProjectDetailsComponent
  },
  {
    path: 'project-list',
    component: ProjectListComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
