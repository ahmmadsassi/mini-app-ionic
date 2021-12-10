import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewitemPage } from './newitem.page';

const routes: Routes = [
  {
    path: '',
    component: NewitemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewitemPageRoutingModule {}
