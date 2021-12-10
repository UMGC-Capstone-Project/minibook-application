import { ApiService } from './../../services/api.service';
import { UserService } from './../auth/services/user.service';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user$ = new BehaviorSubject<IUser>(
    {
      birthday: '',
      country: '',
      displayname: '',
      email: '',
      firstname: '',
      gender: '',
      id: 0,
      isPublished: true,
      lastname: '',
      location: '',
      password: '',
      phonenumber: ''
    }
  );

  photos = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];

  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    this.apiService.getMyProfile().subscribe((data) => {
      console.log(data);
      this.user$.next((data as IUser));
    }, err => {
      console.log(err);
    });
  }


}

export interface IUser {
  avatar?: { id: number; url: string; key: string };
  birthday: string;
  country: string;
  displayname: string;
  email: string;
  firstname: string;
  gender: string;
  id: number;
  isPublished: boolean;
  lastname: string;
  location: string;
  password: string;
  phonenumber: string;
}
