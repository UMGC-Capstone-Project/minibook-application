import { Component, Input, OnInit } from '@angular/core';
import { AuthStoreService } from 'src/app/pages/auth/services/auth-store.service';

@Component({
  selector: 'app-connections-card',
  templateUrl: './connections-card.component.html',
  styleUrls: ['./connections-card.component.scss'],
})
export class ConnectionsCardComponent implements OnInit {
  @Input() connection: Connection;

  constructor() {
    this.connection = {
      avatar: '',
      firstname: 'John',
      lastname: 'Doe'
    }
  }

  ngOnInit() { }

}


class Connection {
  avatar: string;
  firstname: string;
  lastname: string
}