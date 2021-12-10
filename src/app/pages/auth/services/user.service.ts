import { environment } from './../../../../environments/environment.dev';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    user$ = new BehaviorSubject<any>(null);
    apiUrl = environment.apiUrl;
    constructor(private readonly httpClient: HttpClient) { }

    async getMyProfile() {
        return this.httpClient.get<any>(`${this.apiUrl}/users/me`);
    }

    getUserProfile() {

    }
}