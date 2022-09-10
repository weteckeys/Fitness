import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

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
    constructor(private router: Router) { }

    ngOnInit() {
    }

    goToTrainerProfile() {
        this.router.navigate(['tabs/trainer-profile']);
    }

}
