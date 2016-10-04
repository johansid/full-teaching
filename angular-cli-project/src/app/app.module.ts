import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { routing } from './app.routing';

import { MaterializeModule } from 'angular2-materialize';

import { MaterialModule } from '@angular/material';

import { AppComponent }           from './app.component';
import { NavbarComponent }        from './navbar/navbar.component';
import { LoginModalComponent }    from './login-modal/login-modal.component';
import { PresentationComponent }  from './presentation/presentation.component';
import { DashboardComponent }     from './dashboard/dashboard.component';
import { LessonDetailsComponent } from './lesson-details/lesson-details.component'
import { SettingsComponent }      from './settings/settings.component';
import { ErrorMessageComponent }  from './error-message/error-message.component';

import { AuthenticationService } from './services/authentication.service';
import { LessonService }         from './services/lesson.service';
import { LoginModalService }     from './services/login-modal.service';
import { AuthGuard }             from './auth.guard';
import { Constants }             from './constants';

// used to create fake backend
import { fakeBackendProvider }         from './fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions }          from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    MaterialModule.forRoot(),
    routing,
  ],
  declarations: [
    AppComponent,
    PresentationComponent,
    DashboardComponent,
    LessonDetailsComponent,
    NavbarComponent,
    LoginModalComponent,
    SettingsComponent,
    ErrorMessageComponent,
  ],
  providers: [
    AuthenticationService,
    LessonService,
    LoginModalService,
    AuthGuard,
    Constants,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
