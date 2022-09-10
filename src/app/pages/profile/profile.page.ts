import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    tabID = 'program';

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

    constructor(private route: Router) { }

    ngOnInit() {
    }

    changeSegment(val) {
        this.tabID = val;
    }

    goToEditProfile() {
        this.route.navigate(['tabs/edit-profile']);
    }

    goToTrainerProfile() {
        this.route.navigate(['tabs/trainer-profile']);
    }

}
