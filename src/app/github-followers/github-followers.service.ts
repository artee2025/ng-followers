import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GithubFollower } from './github-follower';
import { GITHUB_FOLLOWERS_URL } from "../config/constants";
@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService {
  constructor(private http: HttpClient) { }
  getFollowers = (username: string) => this.http.get<GithubFollower[]>(eval("`" + GITHUB_FOLLOWERS_URL + "`"))
}
