import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: [ './login.page.scss' ]
})
export class LoginPage implements OnInit {
	isSubmitted: boolean = false;

	ionicForm = this.formBuilder.group({
		email: [
			'',
			[
				Validators.minLength(4),
				Validators.required,
				Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
			]
		],
		password: [ '', [ Validators.minLength(6), Validators.required ] ]
	});

	constructor(public formBuilder: FormBuilder) {}

	ngOnInit() {}
	get errorControl() {
		return this.ionicForm.controls;
	}
	onSubmit() {
		this.isSubmitted = true;
		if (!this.ionicForm.valid) {
			console.log('Please provide all the required values!');
			return false;
		}
		console.log(this.ionicForm.value);
	}
}
