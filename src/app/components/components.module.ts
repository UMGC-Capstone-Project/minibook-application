import { DefaultNavComponent } from './default-nav/default-nav.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DefaultFooterComponent } from './default-footer/default-footer.component';

const components = [ DefaultNavComponent, DefaultFooterComponent ];

@NgModule({
	imports: [ IonicModule, CommonModule ],
	declarations: components,
	exports: components
})
export class ComponentsModule {}
