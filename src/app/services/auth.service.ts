import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Http, HttpResponse } from '@capacitor-community/http';
import { Platform } from '@ionic/angular';

const API_URL: string =  'https://api.minibook.io';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  plt: string;
  localhost:string = 'localhost';

  constructor(private platform: Platform) {
    this.plt = this.platform.is('mobileweb') ? 'web' :
    this.platform.is('ios') ? 'ios' : 'android'
    this.localhost ="192.168.0.7"
  }

  register(value: any): void {
    const results = Http.get({
      url: API_URL,
    })

    console.log(results);
  }

  login() {
    console.log(`login: `, 5)
  }
}
