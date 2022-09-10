import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainerProfilePageRoutingModule } from './trainer-profile-routing.module';

import { TrainerProfilePage } from './trainer-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainerProfilePageRoutingModule
  ],
  declarations: [TrainerProfilePage]
})
export class TrainerProfilePageModule {}
