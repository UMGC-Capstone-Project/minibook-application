import { User } from './../../pages/auth/model/User';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from './../../pages/profile/profile.page';
import { AuthStoreService } from './../../pages/auth/services/auth-store.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.scss'],
})
export class ProfileSummaryComponent implements OnInit {

  @Input() user: Observable<IUser>;

  constructor(public authStoreService: AuthStoreService, public photoService: PhotoService) { }

  ngOnInit() {
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  onFileSelect(ev: any) {
    console.log(ev);
  }
}
