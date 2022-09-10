import { ConfirmBookingPage } from './../confirm-booking/confirm-booking.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-appoinment-booking',
  templateUrl: './appoinment-booking.page.html',
  styleUrls: ['./appoinment-booking.page.scss'],
})
export class AppoinmentBookingPage implements OnInit {

    tabID = 1;
    booked = [
      {
        time : '10:00 AM',
        status : '1'
      },
      {
        time : '11:00 AM',
        status : '1'
      },
      {
        time : '12:00 PM',
        status : '0'
      },
      {
        time : '02:00 PM',
        status : '0'
      },
      {
        time : '03:00 PM',
        status : '0'
      },
      {
        time : '05:00 PM',
        status : '1'
      },
      {
        time : '08:00 PM',
        status : '0'
      }
    ];

    constructor(private navCrtl: NavController, private modalCtrl: ModalController) { }

    ngOnInit() {
    }

    goToBack() {
        this.navCrtl.back();
    }

    slotBooking(item){
        this.booked.forEach(element => {
          if(element.status == '2')
            element.status = '0';
        });
    
        if(item.status == '1'){
          return false
        }
        else{
          console.log(item);
          item.status = '2';
          console.log(this.booked);
        }
    }

    async openModal() {
        const modal = await this.modalCtrl.create({
            component: ConfirmBookingPage,
            cssClass: 'transparent_modal'
        });
        return await modal.present();
    }

}
