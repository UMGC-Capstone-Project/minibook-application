import { DefaultNavComponent } from './default-nav/default-nav.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { AnimBirdComponent } from './anim-bird/anim-bird.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const components = [ DefaultNavComponent, DefaultFooterComponent, AnimBirdComponent, PageNotFoundComponent ];

@NgModule({
	imports: [ IonicModule.forRoot(), CommonModule ],
	declarations: components,
	exports: components
})
export class ComponentsModule {}
