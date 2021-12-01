import { DefaultNavComponent } from './default-nav/default-nav.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { AnimBirdComponent } from './anim-bird/anim-bird.component';

const components = [ DefaultNavComponent, DefaultFooterComponent, AnimBirdComponent ];

@NgModule({
	imports: [ IonicModule, CommonModule ],
	declarations: components,
	exports: components
})
export class ComponentsModule {}
