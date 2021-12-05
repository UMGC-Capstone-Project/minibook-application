import { LoginPage } from './login/login.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/auth/login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule)
	},
	{
		path: 'register',
		loadChildren: () => import('./register/register.module').then((m) => m.RegisterPageModule)
	},
	{
		path: 'recover',
		loadChildren: () => import('./recover/recover.module').then((m) => m.RecoverPageModule)
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ]
})
export class AuthRoutingModule {}
