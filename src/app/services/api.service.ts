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
  private subject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private readonly httpClient: HttpClient) { }

  getImages() {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/v1/image`);
  }

  uploadImage(data, name, ext) {
    const formData = new FormData();
    formData.append('file', data, `myimage.${ext}`);
    formData.append('name', name);
    return this.httpClient.post<any>(`${environment.apiUrl}/v1/image`, formData);
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
    return this.httpClient.get<any[]>(`${environment.apiUrl}/v1/feed`, {
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
    return this.httpClient.post(`${environment.apiUrl}/v1/feed`, {
      body
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  getMyProfile() {
    const token = this.getToken();
    return this.httpClient.get(`${environment.apiUrl}/v1/users/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}
