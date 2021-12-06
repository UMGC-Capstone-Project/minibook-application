import { AuthStoreService } from './../../pages/auth/services/auth-store.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  @Input() message:string;
  constructor(public authStoreService:AuthStoreService) { }

  ngOnInit() {}

}
