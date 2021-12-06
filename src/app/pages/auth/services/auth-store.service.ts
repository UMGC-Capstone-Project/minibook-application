import jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { map, shareReplay, tap } from 'rxjs/operators';

const AUTH_TOKEN: string = 'auth_token';
const AUTH_USER: string = 'auth_user';
// const API_URL: string = 'https://api.minibook.io';
const API_URL: string = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {

  private subject: BehaviorSubject<User> = new BehaviorSubject<User>(null)
  private token_subject: BehaviorSubject<string> = new BehaviorSubject<string>(null)

  user$: Observable<User> = this.subject.asObservable();
  token$: Observable<string> = this.token_subject.asObservable();

  isLoggedIn$: Observable<boolean>
  isLoggedOut$: Observable<boolean>

  constructor(private readonly httpClient: HttpClient) {
    this.isLoggedIn$ = this.user$.pipe(map(user => !!user))
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn))

    const user = localStorage.getItem(AUTH_USER);
    const token = localStorage.getItem(AUTH_TOKEN);

    if (user) {
      this.subject.next(JSON.parse(user));
      this.token_subject.next(token);
    }
  }

  login(email: string, password: string): Observable<User> {
    return this.httpClient.post<User>(`${API_URL}/v1/auth/login`, { email: email, password: password })
      .pipe(
        // has a token
        tap(payload => {
          console.log(payload)
          // decode jwt token
          const decode: AuthenticationPayload = jwt_decode(payload['token'])
          // push the user into the reactive object
          console.log(decode.user)
          this.subject.next(decode.user)
          // save the token in local storage
          localStorage.setItem(AUTH_TOKEN, JSON.stringify(payload['token']));
          localStorage.setItem(AUTH_USER, JSON.stringify(decode.user));
        }),
        shareReplay()
      );
  }

  logout() {
    this.subject.next(null);
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(AUTH_USER)
  }
}

interface AuthenticationPayload {
  user: User
  exp: number;
  iat: number;
}

interface JWTPayload {
  token: string;
}