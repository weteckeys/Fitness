import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.page.html',
  styleUrls: ['./programs.page.scss'],
})
export class ProgramsPage implements OnInit {

    story = [
        {
            img : 'assets/imgs/t1.jpg',
            name : 'Weight Loss'
        },
        {
            img : 'assets/imgs/t2.jpg',
            name : 'Aerobics'
        },
        {
            img : 'assets/imgs/t3.jpg',
            name : 'Body Building'
        },
        {
            img : 'assets/imgs/t4.jpg',
            name : 'Body Fit'
        },  
        {
            img : 'assets/imgs/t5.jpg',
            name : 'Weight Loss'
        },
        {
            img : 'assets/imgs/t6.jpg',
            name : 'Aerobics'
        },
        {
            img : 'assets/imgs/t7.jpg',
            name : 'Body Building'
        },
    ];

    constructor(private navCtrl: NavController, private route: Router) { }

    ngOnInit() {
    }

    goToVideoList() {
        this.route.navigate(['/video-list']);
    }

}
