import { IFormMessageStatus } from './../../../common/interfaces/form-message-status.interface';
import { UserLoginRequest } from './../model/User';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, noop } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { AuthService } from '../services/auth.service';
import { AuthStoreService } from '../services/auth-store.service';
import { Platform } from '@ionic/angular';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
	isSubmitted = false;
	form: FormGroup;

	formMessageStatus$ = new BehaviorSubject<IFormMessageStatus>({
		message: 'Submit',
		error: false,
	});

	constructor(
		private store: Store<AppState>,
		public formBuilder: FormBuilder,
		private authService: AuthService,
		private router: Router,
		private authStore: AuthStoreService,
		public platform: Platform
	) {
		this.form = this.formBuilder.group({
			email: [
				'john@minibook.io',
				[
					Validators.minLength(4),
					Validators.required,
					Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
				]
			],
			password: ['123456789', [Validators.minLength(6), Validators.required]]
		});
	}

	ngOnInit() { }
	get errorControl() {
		return this.form.controls;
	}

	getWidth() {
		if (this.platform.is('mobile')) {
			return '100%';
		}
		return '';
	}

	onSubmit() {
		this.isSubmitted = true;
		if (!this.form.valid) {
			console.log('Please provide all the required values!');
			return false;
		}

		const data = this.form.value as UserLoginRequest;
		this.authStore
			.login(data.email, data.password)
			.subscribe(() => {
				this.router.navigateByUrl('/dashboard');
			}, err => {
				console.log(err);
				switch (err.status) {
					case 401:
						this.formMessageStatus$.next({
							message: 'Invalid Credentials',
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


		// .pipe(
		// 	tap((user) => {
		// 		console.log(user);
		// 		const token = user["access_token"]
		// 		console.log(token)
		// 		const decode = jwt_decode(token)
		// 		console.log(decode)
		// 		// this.store.dispatch(
		// 		// 	// AuthActions.login({
		// 		// 	// 	user: {
		// 		// 	// 		email: '',
		// 		// 	// 		password: ''
		// 		// 	// 	}
		// 		// 	// })
		// 		// );
		// 		this.router.navigateByUrl('/dashboard');
		// 	})
		// )
		// .subscribe(noop, () => console.log('login failed'));
		// this.store.dispatch(loginStart({email: '', password: ''}))
	}
}
