import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectionsPageRoutingModule } from './connections-routing.module';

import { ConnectionsPage } from './connections.page';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectionsPageRoutingModule
  ],
  declarations: [ConnectionsPage]
})
export class ConnectionsPageModule { }
