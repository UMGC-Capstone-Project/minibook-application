import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private httpClient: HttpClient) { }
  loadAllFeeds(): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(`${environment.apiUrl}/feed`);
  }


}

interface Posts { }
