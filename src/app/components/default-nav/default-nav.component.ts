import { AuthStoreService } from './../../pages/auth/services/auth-store.service';
import { isLoggedIn, isLoggedOut } from './../../pages/auth/auth.selectors';
import { Component, NgModule, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SettingsComponent } from './popover/settings.component';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { select, Store } from '@ngrx/store';
import { AuthState } from 'src/app/pages/auth/reducers/module';
import { Router } from '@angular/router';
import { logout } from 'src/app/pages/auth/auth.actions';
import { PopoverComponent } from '../popover/popover.component';

@Component({
	selector: 'app-default-nav',
	templateUrl: './default-nav.component.html',
	styleUrls: [ './default-nav.component.scss' ]
})
export class DefaultNavComponent implements OnInit {
	private isPopover: boolean = false;

	constructor(public readonly authStoreService: AuthStoreService, public popoverController: PopoverController, private router: Router) {
	}

	ngOnInit() {}

	async presentPopover(ev: any) {
		if (this.isPopover) {
			return;
		}
		const popover = await this.popoverController.create({
			component: PopoverComponent,
			event: ev,
			cssClass: 'my-custom-pop',
			translucent: false,
		});
		this.isPopover = true;

		popover.onDidDismiss().then(()=> {
			this.isPopover = false;
		})

		return await popover.present();
	}

	profile() {
		this.router.navigateByUrl('/profile');
	}

	logout() {
		this.authStoreService.logout()
		this.router.navigateByUrl('/')
	}
}
