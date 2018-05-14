// outside import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes}  from '@angular/router';
// inside import
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { TrackerComponent } from './tracker/tracker.component';
import { ProfileComponent } from './profile/profile.component';
import { ShareComponent } from './share/share.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TrackerService } from './services/tracker.service';
import { MessagesService } from './services/messages.service';


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        MessagesComponent,
        HomeComponent,
        TrackerComponent,
        ProfileComponent,
        ShareComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path: 'home', component: HomeComponent},
            {path: 'tracker', component: TrackerComponent},
            {path: 'profile', component: ProfileComponent},
            {path: 'share', component: ShareComponent},
            {path: '', redirectTo: '/home', pathMatch: 'full'},
            {path: 'signin', component: SigninComponent},
            {path: 'signup', component: SignupComponent}
        ])
    ],
    providers: [MessagesService, TrackerService],
    bootstrap: [AppComponent]
})
export class AppModule { }
