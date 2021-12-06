import { AuthStoreService } from './../../pages/auth/services/auth-store.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public authStoreService: AuthStoreService, private router: Router) { }

  ngOnInit() { }

  logout() {
    this.authStoreService.logout()
    this.router.navigateByUrl('/')
  }
}
