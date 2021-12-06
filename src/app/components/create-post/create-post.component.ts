import { ApiService } from './../../services/api.service';
import { AuthStoreService } from './../../pages/auth/services/auth-store.service';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  inputChange$ = new BehaviorSubject('');
  constructor(public authStoreService: AuthStoreService, private apiService: ApiService) { }

  ngOnInit() { }

  async onChange(ev: any) {
    this.inputChange$.next(ev.detail.value)
  }

  async onClick() {
    console.log(this.inputChange$.value)
    if (this.inputChange$.value.length < 1)
      return;

    this.apiService.createPost(this.inputChange$.value).subscribe(results => {
      console.log(results)
      this.inputChange$.next('')
    })
  }

}
