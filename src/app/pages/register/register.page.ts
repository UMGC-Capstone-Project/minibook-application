import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
	isSubmitted: boolean = false;

	registrationForm = this.formBuilder.group({
    displayname: ['JohnDoe51', [Validators.required]],
    firstname: ['john', [Validators.required]],
    lastname: ['doe', [Validators.required]],
		email: [
			'john@minibook.io',
			[
				Validators.minLength(4),
				Validators.required,
				Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
			]
		],
		password: [ '123456789', [ Validators.minLength(6), Validators.required ] ],
    passwordConfirm: ['123456789', [Validators.required]],
    termsOfService: [false, [Validators.required, Validators.requiredTrue]]
	});

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    console.log("Registration Page")
   }

  ngOnInit() {
  }

  get errorControl() {
		return this.registrationForm.controls;
	}

  onSubmit() {
    console.log("submitting")
		this.isSubmitted = true;
		if (!this.registrationForm.valid) {
			console.log('Please provide all the required values!');
			return false;
		}
		console.log(this.registrationForm.value);
	}

}
