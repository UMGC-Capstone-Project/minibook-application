import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.page.html',
  styleUrls: ['./connections.page.scss'],
})
export class ConnectionsPage implements OnInit {

  public connections: Connection[]
  constructor() {
    this.connections = [
      {
        avatar: '',
        firstname: 'Dave',
        lastname: 'Mydlarz'
      },
      {
        avatar: '',
        firstname: 'Dave',
        lastname: 'Mydlarz'
      },
      {
        avatar: '',
        firstname: 'Dave',
        lastname: 'Mydlarz'
      },
      {
        avatar: '',
        firstname: 'Dave',
        lastname: 'Mydlarz'
      },
      {
        avatar: '',
        firstname: 'Dave',
        lastname: 'Mydlarz'
      },
      {
        avatar: '',
        firstname: 'Dave',
        lastname: 'Mydlarz'
      },
      {
        avatar: '',
        firstname: 'Dave',
        lastname: 'Mydlarz'
      },
      {
        avatar: '',
        firstname: 'Dave',
        lastname: 'Mydlarz'
      },
      {
        avatar: '',
        firstname: 'Dave',
        lastname: 'Mydlarz'
      },
      {
        avatar: '',
        firstname: 'Dave',
        lastname: 'Mydlarz'
      },
      {
        avatar: '',
        firstname: 'Dave',
        lastname: 'Mydlarz'
      },
      {
        avatar: '',
        firstname: 'Dave',
        lastname: 'Mydlarz'
      }
    ]
  }

  ngOnInit() {
  }

}

class Connection {
  avatar: string;
  firstname: string;
  lastname: string
}