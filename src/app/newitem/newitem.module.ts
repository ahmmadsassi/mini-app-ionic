import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewitemPageRoutingModule } from './newitem-routing.module';

import { NewitemPage } from './newitem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewitemPageRoutingModule
  ],
  declarations: [NewitemPage]
})
export class NewitemPageModule {}
