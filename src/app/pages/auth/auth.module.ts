import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthRoutingModule } from './auth-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
	imports: [
		AuthRoutingModule,
		IonicModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class AuthModule { }
