import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.page.html',
  styleUrls: ['./article-detail.page.scss'],
})
export class ArticleDetailPage implements OnInit {

    constructor(private navCtrl: NavController) { }

    ngOnInit() {
    }

    goToBack() {
        this.navCtrl.back();
    }

}
