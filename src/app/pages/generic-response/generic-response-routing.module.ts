import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenericResponsePage } from './generic-response.page';

const routes: Routes = [
  {
    path: '',
    component: GenericResponsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenericResponsePageRoutingModule {}
