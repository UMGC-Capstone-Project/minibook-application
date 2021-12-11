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

  followers$ = new BehaviorSubject<User[]>(null);

  constructor(private readonly apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getFollowers().subscribe(data => {
      // eslint-disable-next-line no-underscore-dangle
      const _data: any = data;
      this.followers$.next(null);
      // eslint-disable-next-line no-underscore-dangle
      const _users: User[] = [];
      for (const iterator of _data) {
        const buildUser: User = {
          avatar: null,
          displayName: iterator.following.displayname,
          email: iterator.following.email,
          firstname: iterator.following.firstname,
          lastname: iterator.following.lastname,
          userId: iterator.following.id
        };
        _users.push(buildUser);
        console.log(buildUser);
      }
      this.followers$.next(_users);
    });
  }

}
