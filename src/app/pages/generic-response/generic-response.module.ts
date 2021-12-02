import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenericResponsePageRoutingModule } from './generic-response-routing.module';

import { GenericResponsePage } from './generic-response.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenericResponsePageRoutingModule
  ],
  declarations: [GenericResponsePage]
})
export class GenericResponsePageModule {}
