import { User } from './../auth/model/User';
import { ApiService } from './../../services/api.service';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './../auth/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {

  following$ = new BehaviorSubject<User[]>(null);

  constructor(private readonly apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getFollowings().subscribe(data => {
      // eslint-disable-next-line no-underscore-dangle
      const _data: any = data;
      this.following$.next(null);
      // eslint-disable-next-line no-underscore-dangle
      const _users: User[] = [];
      for (const iterator of _data) {
        const buildUser: User = {
          avatar: null,
          displayName:iterator.followers.displayname,
          email: iterator.followers.email,
          firstname: iterator.followers.firstname,
          lastname: iterator.followers.lastname,
          userId: iterator.followers.id
        };
        _users.push(buildUser);
        console.log(buildUser);
      }
      this.following$.next(_users);
    });
  }


}
