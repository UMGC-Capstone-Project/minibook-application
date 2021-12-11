import { ApiService } from 'src/app/services/api.service';
import { BlankUser } from './../../profile.page';
import { map } from 'rxjs/operators';


import { BehaviorSubject, Observable } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../../profile.page';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {


  user$ = new BehaviorSubject<IUser>(BlankUser);

  photos = [
    '1',
    '2',

  ];
  routeSub: any;

  constructor(private apiService: ApiService,
    private route: ActivatedRoute,) { }

  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.apiService.getUserProfile(+params.id).subscribe((data) => {
        console.log(`UserProfileComponent: ${JSON.stringify(data)}`);
        this.user$.next((data as IUser));
      }, err => {
        console.log(err);
      });
    });

  }

  ngOnDestroy() {
    // this.routeSub.unsubscribe();
    // this.user$.unsubscribe();
  }

  private async getUserIdFromUrl() {
    this.route.url.pipe(
      map((urlSeg)=> +urlSeg[0].path)
    );
  };

}
