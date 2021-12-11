import { environment } from './../../environments/environment';
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private subject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private readonly httpClient: HttpClient) { }

  getImages() {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/image`);
  }

  uploadImage(data, name, ext) {
    const formData = new FormData();
    formData.append('file', data, `myimage.${ext}`);
    formData.append('name', name);
    return this.httpClient.post<any>(`${environment.apiUrl}/image`, formData);
  }

  uploadImageFile(file: File) {
    const ext = file.name.split('.').pop();
    const formData = new FormData();
    formData.append('file', file, `myimage.${ext}`);
    formData.append('name', file.name);

    return this.httpClient.post<any>(`${environment.apiUrl}/image`, formData);
  }

  deleteImage(id: string) {
    return this.httpClient.delete(`${environment.apiUrl}/image/${id}`);
  }

  getFeed() {
    const token = this.getToken();
    console.log(`token: ${token}`);
    return this.httpClient.get<any[]>(`${environment.apiUrl}/feed`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  getToken(): string {
    return localStorage.getItem('auth_token').replace(/["]/g, '');
  }

  createPost(body: string) {
    const token = this.getToken();
    return this.httpClient.post(`${environment.apiUrl}/feed`, {
      body
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  getFollowings() {
    const token = this.getToken();
    return this.httpClient.get(`${environment.apiUrl}/users/followings`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
  }

  getFollowers() {
    const token = this.getToken();
    return this.httpClient.get(`${environment.apiUrl}/users/followers`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
  }

  getMyProfile() {
    const token = this.getToken();
    return this.httpClient.get(`${environment.apiUrl}/users/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  getUserProfile(id: number) {
    console.log(id);
    const token = this.getToken();
    return this.httpClient.get(`${environment.apiUrl}/users/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}
