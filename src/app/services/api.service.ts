import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:3000'
  private subject: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  constructor(private readonly httpClient: HttpClient) { }

  getImages() {
    return this.httpClient.get<any[]>(`${this.url}/v1/image`)
  }

  uploadImage(data, name, ext) {
    const formData = new FormData();
    formData.append('file', data, `myimage.${ext}`)
    formData.append('name', name);
    return this.httpClient.post<any>(`${this.url}/v1/image`, formData);
  }

  uploadImageFile(file: File) {
    const ext = file.name.split('.').pop();
    const formData = new FormData();
    formData.append('file', file, `myimage.${ext}`);
    formData.append('name', file.name);
 
    return this.httpClient.post<any>(`${this.url}/image`, formData);
  }

  deleteImage() {
    return this.httpClient.delete(`${this.url}/image/${id}`);
  }
}
