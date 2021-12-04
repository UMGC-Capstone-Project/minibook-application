import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthModule } from './pages/auth/auth.module';
import { LandingPage } from './pages/landing/landing.page';

const routes: Routes = [
	{
		path: '',
		component: LandingPage
	},
	{
		path: '',
		loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule)
	},
	// {
	// 	path: 'login',
	// 	loadChildren: () => import('./pages/auth/login/login.module').then((m) => m.LoginPageModule)
	// },
	{
		path: 'dashboard',
		loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardPageModule)
	},
	{
		path: 'register',
		loadChildren: () => import('./pages/auth/register/register.module').then((m) => m.RegisterPageModule)
	},
	{
		path: 'recover',
		loadChildren: () => import('./pages/auth/recover/recover.module').then((m) => m.RecoverPageModule)
	},
	{
		path: 'profile',
		loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
	  },
	{
		path: 'tabs',
		loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule)
	},
	{
		path: 'confirmation',
		loadChildren: () =>
			import('./pages/generic-response/generic-response.module').then((m) => m.GenericResponsePageModule)
	},
	{
		path: 'status',
		loadChildren: () => import('./pages/status/status.module').then((m) => m.StatusPageModule)
	},
	// Wildcard route
	{ path: '**', component: PageNotFoundComponent },

];
@NgModule({
	imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
