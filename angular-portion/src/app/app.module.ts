import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectRequestComponent } from './project-request/project-request.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { SessionService } from './services/session.service';
import { ProjectService } from './services/project.service';
import { UserProfileService } from './services/user-profile.service';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProjectRequestComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    UserProfileComponent,
    UserLoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SessionService, ProjectService, UserProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
