import { User } from './../auth/model/User';
import { ApiService } from './../../services/api.service';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './../auth/services/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../profile/profile.page';

@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {

  following$ = new BehaviorSubject<IUser[]>(null);

  constructor(private readonly apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getFollowings().subscribe(data => {
      this.following$.next((data as IUser[]));
    });
  }


}
