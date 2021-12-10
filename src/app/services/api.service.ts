import { environment } from './../../environments/environment.dev';
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;
  private subject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private readonly httpClient: HttpClient) { }

  getImages() {
    return this.httpClient.get<any[]>(`${this.apiUrl}/image`);
  }

  uploadImage(data, name, ext) {
    const formData = new FormData();
    formData.append('file', data, `myimage.${ext}`);
    formData.append('name', name);
    return this.httpClient.post<any>(`${this.apiUrl}/image`, formData);
  }

  uploadImageFile(file: File) {
    const ext = file.name.split('.').pop();
    const formData = new FormData();
    formData.append('file', file, `myimage.${ext}`);
    formData.append('name', file.name);

    return this.httpClient.post<any>(`${this.apiUrl}/image`, formData);
  }

  deleteImage(id: string) {
    return this.httpClient.delete(`${this.apiUrl}/image/${id}`);
  }

  getFeed() {
    const token = this.getToken();
    return this.httpClient.get<any[]>(`${this.apiUrl}/feed`, {
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
    return this.httpClient.post(`${this.apiUrl}/feed`, {
      body
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  getMyProfile() {
    const token = this.getToken();
    return this.httpClient.get(`${this.apiUrl}/users/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}
