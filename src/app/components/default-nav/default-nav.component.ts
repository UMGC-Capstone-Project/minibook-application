import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SettingsComponent } from '../settings/settings.component';

@Component({
	selector: 'app-default-nav',
	templateUrl: './default-nav.component.html',
	styleUrls: [ './default-nav.component.scss' ]
})
export class DefaultNavComponent implements OnInit {
	isAuthenticated: boolean = false;

	constructor(public popoverController: PopoverController) {}

	ngOnInit() {}

	async settingsPopover(ev: any) {
		const popover = await this.popoverController.create({
			component: SettingsComponent,
			event: ev,
			mode: 'md',
			translucent: false
		});
		return await popover.present();
	}

}
