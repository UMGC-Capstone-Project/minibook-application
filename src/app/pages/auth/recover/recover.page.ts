import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
	isSubmitted: boolean = false;

	recoveryForm = this.formBuilder.group({
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

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    
  }

}
