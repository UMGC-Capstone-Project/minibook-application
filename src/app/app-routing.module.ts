import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LandingPage } from './pages/landing/landing.page';

const routes: Routes = [
	{
		path: '',
		component: LandingPage
	},
	{
		path: 'login',
		loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule)
	},
	{
		path: 'dashboard',
		loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardPageModule)
	},
	{
		path: 'register',
		loadChildren: () => import('./pages/register/register.module').then((m) => m.RegisterPageModule)
	},
	{
		path: 'recover',
		loadChildren: () => import('./pages/recover/recover.module').then((m) => m.RecoverPageModule)
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
	{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
	imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
