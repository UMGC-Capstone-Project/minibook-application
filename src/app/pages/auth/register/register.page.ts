import { IFormMessageStatus } from './../../../common/interfaces/form-message-status.interface';
import { AuthStoreService } from 'src/app/pages/auth/services/auth-store.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
	isSubmitted = false;

	formMessageStatus$ = new BehaviorSubject<IFormMessageStatus>({
		message: 'Submit',
		error: false,
	});

	form: IUserFormGroup = this.formBuilder.group({
		displayname: ['JohnDoe42', [Validators.required]],
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
		password: ['123456789', [Validators.minLength(6), Validators.required]],
		passwordConfirm: ['123456789', [Validators.required]],
		termsOfService: [false, [Validators.required, Validators.requiredTrue]]
	}) as IUserFormGroup;

	constructor(
		private authStoreService: AuthStoreService,
		private router: Router,
		private formBuilder: FormBuilder) { }

	ngOnInit() { }

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
		this.authStoreService.register(results).subscribe((data) => {
			console.log(data);
			this.router.navigate(['/confirmation']);
		}, err => {
			console.log(err);
			switch (err.status) {
				case 400:
					this.formMessageStatus$.next({
						message: err.error.message,
						error: true
					});
					break;
				default:
					this.formMessageStatus$.next({
						message: 'Try again later',
						error: true
					});
					break;
			};
			setTimeout(() => {
				this.formMessageStatus$.next({
					message: 'Submit',
					error: false
				});
			}, 2000);
		});
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

