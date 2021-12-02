import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, HttpOptions, HttpResponse } from '@capacitor-community/http';
import { Platform } from '@ionic/angular';
import { from, Observable } from 'rxjs';

const API_URL: string = 'https://api.minibook.io';

@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: [ './register.page.scss' ]
})
export class RegisterPage implements OnInit {
	isSubmitted: boolean = false;
	isError: IError;

	form: IUserFormGroup = this.formBuilder.group({
		displayname: [ 'JohnDoe42', [ Validators.required ] ],
		firstname: [ 'john', [ Validators.required ] ],
		lastname: [ 'doe', [ Validators.required ] ],
		email: [
			'john@minibook.io',
			[
				Validators.minLength(4),
				Validators.required,
				Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
			]
		],
		password: [ '123456789', [ Validators.minLength(6), Validators.required ] ],
		passwordConfirm: [ '123456789', [ Validators.required ] ],
		termsOfService: [ false, [ Validators.required, Validators.requiredTrue ] ]
	}) as IUserFormGroup;

	constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {}

	ngOnInit() {}

	get errorControl() {
		return this.form.controls;
	}

	onSubmit() {
		console.log('submitting');
		this.isSubmitted = true;
		if (!this.form.valid) {
			console.log('Please provide all the required values!');
			return false;
		}
		const { passwordConfirm, termsOfService, ...results } = this.form.value;
    //... move all this logic out to an HTTPServiceModule
		const postResults = this.postRequest(
			'https://api.minibook.io/v1/auth/register',
			results
		).subscribe((results) => {
			const _results: UserDto = results.data;
			// probably should do more error handling here ex network connection error.
			if (results.status === 400) {
				console.log('an erro has happened ', results.data);
				this.isError = results.data as IError;
				return;
			}
			this.router.navigate([ '/confirmation' ]);
		});
		setTimeout(() => {
			postResults.unsubscribe();
			this.isError = {
				statusCode: 200,
				message: 'Submit'
			};
			this.isError = null;
		}, 5000);
	}

	postRequest(url: string, data: any): Observable<HttpResponse> {
		const options: HttpOptions = {
			url,
			data: data,
			headers: {
				'Content-Type': 'application/json'
			}
		};
		return from(Http.post(options));
	}
}

interface IUser {
	displayname: string;
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	passwordConfirm: string;
	termsOfService: boolean;
}

interface IUserFormGroup extends FormGroup {
	value: IUser;

	// We need to add these manually again, same fields as IUser
	controls: {
		displayname: AbstractControl;
		firstname: AbstractControl;
		lastname: AbstractControl;
		email: AbstractControl;
		password: AbstractControl;
		passwordConfirm: AbstractControl;
		termsOfService: AbstractControl;
	};
}

interface UserDto {
	id: number;
	email: string;
	displayname: string;
}

interface IError {
	message: string;
	statusCode: number;
}
