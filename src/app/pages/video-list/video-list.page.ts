import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.page.html',
  styleUrls: ['./video-list.page.scss'],
})
export class VideoListPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  chapters = [
    {
      img : 'assets/imgs/t1.jpg',
      name: 'Body Building',
      per : 10
    },
    {
      img : 'assets/imgs/t2.jpg',
      name: 'Aerobics',
      per : 7
    },
    {
      img : 'assets/imgs/t3.jpg',
      name: 'Weight Loss',
      per : 15
    },
    {
      img : 'assets/imgs/t4.jpg',
      name: 'Body Fit',
      per : 20
    },
    {
      img : 'assets/imgs/t5.jpg',
      name: 'Body Building',
      per : 14
    },
    {
      img : 'assets/imgs/t6.jpg',
      name: 'Aerobics',
      per : 12
    },
    {
      img : 'assets/imgs/t7.jpg',
      name: 'Weight Loss',
      per : 17
    },
  ];

  goBack() {
      this.navCtrl.back();
  }
}
