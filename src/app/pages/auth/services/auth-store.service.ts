import jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { map, shareReplay, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const AUTH_TOKEN = 'auth_token';
const AUTH_USER = 'auth_user';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {
  apiUrl = environment.apiUrl;
  subject: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  user$: Observable<User> = this.subject.asObservable();
  token$: Observable<string> = this.tokenSubject.asObservable();

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;



  constructor(private readonly httpClient: HttpClient) {
    this.isLoggedIn$ = this.user$.pipe(map(user => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));

    const user = localStorage.getItem(AUTH_USER);
    const token = localStorage.getItem(AUTH_TOKEN);

    if (user) {
      this.subject.next(JSON.parse(user));
      this.tokenSubject.next(token);
    }
  }

  login(email: string, password: string): Observable<User> {
    console.log(email);
    return this.httpClient.post<User>(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(
        // has a token
        tap(payload => {
          console.log(payload);
          // decode jwt token
          const decode: AuthenticationPayload = jwt_decode(payload['token']);
          // push the user into the reactive object
          console.log(decode.user);
          this.subject.next(decode.user);
          // save the token in local storage
          localStorage.setItem(AUTH_TOKEN, JSON.stringify(payload['token']));
          localStorage.setItem(AUTH_USER, JSON.stringify(decode.user));
        }),
        shareReplay()
      );
  }

  register(results: any) {
    return this.httpClient.post<any>(`${environment.apiUrl}/auth/register`, results);
  }

  logout() {
    this.subject.next(null);
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(AUTH_USER);
  }
}

interface AuthenticationPayload {
  user: User;
  exp: number;
  iat: number;
}

interface JWTPayload {
  token: string;
}
