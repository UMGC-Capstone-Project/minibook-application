import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    console.log("Registration Page")
   }

  ngOnInit() {
  }

  register(form) {
    this.authService.register(form.value).subscribe((results) => {
      this.router.navigateByUrl('home');
    });
  }

}
