import { StorageService } from './../../pages/auth/services/storage.service';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/pages/auth/services/auth.service';
import { UserLoginResponse } from 'src/app/pages/auth/model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor
  (
    public storageService: StorageService
  ) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.storageService.get<UserLoginResponse>('USER_TOKEN'))
    return true;
  }


  
}
