import { IUser } from './../profile/profile.page';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { User } from '../auth/model/User';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.page.html',
  styleUrls: ['./followers.page.scss'],
})
export class FollowersPage implements OnInit {

  followers$ = new BehaviorSubject<IUser[]>(null);

  constructor(private readonly apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getFollowers().subscribe(data => {
      this.followers$.next((data as IUser[]));
    });
  }

}
