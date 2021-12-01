import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API_URL: string =  'https://api.minibook.io';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private httpClient: HttpClient) {
  }

  register(value: any): Observable<string> {
    console.log(API_URL);
    return this.httpClient.get<string>(API_URL);
  }

  login() {
    console.log(`login: `, 5)
  }
}
