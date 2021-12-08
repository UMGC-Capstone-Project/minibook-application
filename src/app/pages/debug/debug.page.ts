import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.page.html',
  styleUrls: ['./debug.page.scss'],
})
export class DebugPage implements OnInit {
  apiUrl = environment.apiUrl;
  baseUrl = environment.baseUrl;
  imgUrl = environment.imgUrl;
  production = environment.production;

  constructor() {

  }

  ngOnInit() {
  }

}

