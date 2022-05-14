import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GithubFollowersService } from './github-followers.service';
import { GithubFollower } from './github-follower';
@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  username = '';
  followers: GithubFollower[] = [];
  constructor(private service: GithubFollowersService, private aroute: ActivatedRoute, private route: Router) { }



  getFollowers(username: any) {
    console.log(username)
    this.service.getFollowers(username).subscribe({
      next: (data: GithubFollower[]) => {
        this.followers = data
      },
      error: error => {
        this.followers = [];
        console.error('An error has occurred!', error);
      }
    })
  }
  _getFollowers(username: any) {
    this.route.navigate(['/githubfollowers', username]);
  }
  ngOnInit() {
    this.aroute.params.subscribe(params => {
      this.username = params['username'];
      this.getFollowers(this.username);
    });
  }

}
