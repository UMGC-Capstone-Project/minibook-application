import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthModule } from './pages/auth/auth.module';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule)
	},
	{
		path: 'auth',
		loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule)
	},
	{
		path: 'login',
		loadChildren: () => import('./pages/auth/login/login.module').then((m) => m.LoginPageModule)
	},
	{
		path: 'settings',
		loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
	},
	{
		path: 'dashboard',
		loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardPageModule)
	},
	{
		path: 'help',
		loadChildren: () => import('./pages/help/help.module').then(m => m.HelpPageModule)
	},
	{
		path: 'connections',
		loadChildren: () => import('./pages/connections/connections.module').then(m => m.ConnectionsPageModule)
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
		loadChildren: () => import('./pages/profile/profile.module').then((m) => m.ProfilePageModule)
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
	{
		path: 'debug',
		loadChildren: () => import('./pages/debug/debug.module').then(m => m.DebugPageModule)
	},
	{
		path: 'following',
		loadChildren: () => import('./pages/following/following.module').then(m => m.FollowingPageModule)
	},
	{
		path: 'followers',
		loadChildren: () => import('./pages/followers/followers.module').then(m => m.FollowersPageModule)
	},
	// Wildcard route
	{ path: '**', component: PageNotFoundComponent },
];
@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
