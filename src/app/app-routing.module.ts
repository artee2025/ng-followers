import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

const routes: Routes = [
  { path: '', redirectTo: 'githubfollowers/google', pathMatch: 'full' },
  {
    path: 'githubfollowers/:username',
    component: GithubFollowersComponent,
  },
  { path: '**', redirectTo: 'githubfollowers/google' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }