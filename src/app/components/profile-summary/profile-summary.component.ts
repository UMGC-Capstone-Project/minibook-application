import { AuthStoreService } from './../../pages/auth/services/auth-store.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.scss'],
})
export class ProfileSummaryComponent implements OnInit {

  @Input() showExtra: boolean = false

  constructor(public authStoreService: AuthStoreService) { }

  ngOnInit() {}

  onFileSelect(ev: any) {
    console.log(ev);
  }
}
