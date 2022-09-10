import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppoinmentBookingPage } from './appoinment-booking.page';

const routes: Routes = [
  {
    path: '',
    component: AppoinmentBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppoinmentBookingPageRoutingModule {}
