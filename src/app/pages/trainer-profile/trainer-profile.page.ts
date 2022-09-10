import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.page.html',
  styleUrls: ['./trainer-profile.page.scss'],
})
export class TrainerProfilePage implements OnInit {

    story = [
        {
            img : 'assets/imgs/t1.jpg',
            name : 'pennytool'
        },
        {
            img : 'assets/imgs/t2.jpg',
            name : 'pelicansteve'
        },
        {
            img : 'assets/imgs/t3.jpg',
            name : 'Jackweary'
        },
        {
            img : 'assets/imgs/t4.jpg',
            name : 'pennytool'
        },  
        {
            img : 'assets/imgs/t5.jpg',
            name : 'pelicansteve'
        },
        {
            img : 'assets/imgs/t6.jpg',
            name : 'Jackweary'
        },
        {
            img : 'assets/imgs/t7.jpg',
            name : 'pennytool'
        },
    ];

    constructor(private navCtrl: NavController, private route: Router) { }

    ngOnInit() {
    }

    goToBack() {
        this.navCtrl.back();
    }

    goToAppBooking() {
        this.route.navigate(['/appoinment-booking']);
    }

    goToArticleDetail() {
        this.route.navigate(['/tabs/article-detail']);
    }

    goToArticle() {
        this.route.navigate(['/tabs/articles']);
    }

}
