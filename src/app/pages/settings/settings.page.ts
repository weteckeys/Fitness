import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    constructor(private navCtrl: NavController, private router: Router) { }

    ngOnInit() {
    }

    goToEditProfile() {
        this.router.navigate(['/tabs/edit-profile']);
    }

    goToTerms() {
        this.router.navigate(['/tabs/terms-conditions']);
    }

    goToReset() {
        this.router.navigate(['/tabs/reset-password']);
    }

    goToNotification() {
        this.router.navigate(['/tabs/notification']);
    }

    logout() {
        this.router.navigate(['/login']);
    }

}
