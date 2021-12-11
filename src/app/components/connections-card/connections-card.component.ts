import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/pages/auth/model/User';
import { AuthStoreService } from 'src/app/pages/auth/services/auth-store.service';

@Component({
  selector: 'app-connections-card',
  templateUrl: './connections-card.component.html',
  styleUrls: ['./connections-card.component.scss'],
})
export class ConnectionsCardComponent implements OnInit {
  @Input() connection: User;

  constructor() {
    console.log(this.connection);
  }

  ngOnInit() { }

}
