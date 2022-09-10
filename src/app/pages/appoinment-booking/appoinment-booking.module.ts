import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppoinmentBookingPageRoutingModule } from './appoinment-booking-routing.module';

import { AppoinmentBookingPage } from './appoinment-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppoinmentBookingPageRoutingModule
  ],
  declarations: [AppoinmentBookingPage]
})
export class AppoinmentBookingPageModule {}
