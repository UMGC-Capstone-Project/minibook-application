import { UserLoginRequest, UserLoginResponse } from './../model/User';
import { BehaviorSubject, from, fromEventPattern, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Http, HttpResponse } from '@capacitor-community/http';
import { Platform } from '@ionic/angular';
import { User } from '../model/User';
import { StorageService } from './storage.service';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	authState = new BehaviorSubject(false);
	apiUrl = environment.apiUrl;
	isAutenticated = false;

	constructor(
		private httpClient: HttpClient,
		private storageService: StorageService
	) { }

	login(data: UserLoginRequest): Observable<UserLoginResponse> {
		const {email, password} = data;
		return this.httpClient.post<UserLoginResponse>(`${environment.apiUrl}/auth/login`, { email, password }).pipe(
			tap(async user=> {
				this.storageService.set<UserLoginResponse>('USER_TOKEN', user);
				// const response = await this.storageService.get<UserLoginResponse>('USER_TOKEN');
				// console.log(response.token);
			})
		);
		// await this.storage.set('USER_INFO', data);
		// console.log(data)
		// const results =
		// this.storageService.get('USER_INFO')

	}
}
