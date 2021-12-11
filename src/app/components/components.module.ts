import { LogoButtonComponent } from './logo-button/logo-button.component';
import { PopoverComponent } from './popover/popover.component';
import { SettingsComponent } from './default-nav/popover/settings.component';
import { DefaultNavComponent } from './default-nav/default-nav.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { AnimBirdComponent } from './anim-bird/anim-bird.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { ProfileSummaryComponent } from './profile-summary/profile-summary.component';
import { ConnectionsCardComponent } from './connections-card/connections-card.component';

const components = [
	ConnectionsCardComponent,
	ProfileSummaryComponent,
	LogoButtonComponent,
	CreatePostComponent,
	DefaultNavComponent,
	DefaultFooterComponent,
	AnimBirdComponent,
	PageNotFoundComponent,
	SettingsComponent,
	PopoverComponent
];

@NgModule({
	imports: [
		IonicModule,
		RouterModule, IonicModule.forRoot(), CommonModule],
	declarations: components,
	exports: components,
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
