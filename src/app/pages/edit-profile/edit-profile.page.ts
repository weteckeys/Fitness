import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

    constructor(private navCtrl: NavController, private router: Router) { }

    ngOnInit() {
    }

    goToBack() {
        this.navCtrl.back();
    }

    goToReset() {
        this.router.navigate(['/tabs/reset-password']);
    }

}
