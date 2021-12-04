import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Http, HttpResponse } from '@capacitor-community/http';
import { Platform } from '@ionic/angular';
import {User} from '../pages/auth/model/User';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	BASE_URL = 'https://api.minibook.io';

	constructor(private httpClient: HttpClient) {}

	login(email: string, password: string): Observable<User> {
		return this.httpClient.post<User>(`${this.BASE_URL}/v1/auth/login`, { email, password });
	}
}
