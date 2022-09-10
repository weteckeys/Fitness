import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

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

    goToArticleDetail() {
        this.route.navigate(['tabs/article-detail']);
    }

}
