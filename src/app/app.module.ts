import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

import { GithubFollowersService } from "./github-followers/github-followers.service";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    GithubFollowersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],

  providers: [GithubFollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
