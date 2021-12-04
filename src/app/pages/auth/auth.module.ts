import { LoginPage } from './login/login.page';
import { StoreModule } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { authReducer } from './reducers/module';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ LoginPage ],
	exports: [ LoginPage ],
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild([
			{
				path: 'login',
				component: LoginPage
			}
		]),
	]
})
export class AuthModule {}
