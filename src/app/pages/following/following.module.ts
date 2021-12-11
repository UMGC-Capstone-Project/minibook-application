import { ComponentsModule } from './../../components/components.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FollowingPageRoutingModule } from './following-routing.module';

import { FollowingPage } from './following.page';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    FollowingPageRoutingModule
  ],
  declarations: [FollowingPage],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FollowingPageModule { }
