import { environment } from './../../../../environments/environment.dev';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    user$ = new BehaviorSubject<any>(null);

    constructor(private readonly httpClient: HttpClient) { }

    async getMyProfile() {
        return this.httpClient.get<any>(`${environment.apiUrl}/users/me`);
    }

    getUserProfile() {

    }
}