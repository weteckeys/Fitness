import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.page.html',
  styleUrls: ['./confirm-booking.page.scss'],
})
export class ConfirmBookingPage implements OnInit {

  constructor(private modalCrtl: ModalController, private router: Router) { }

  ngOnInit() {
  }

  close() {
    this.modalCrtl.dismiss();
    this.router.navigate(['/tabs/home']);
  }

}
