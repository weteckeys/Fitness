import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private route: Router,
        private menuCtrl: MenuController
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });
    }

    close() {
        this.menuCtrl.close();
    }

    goToProfile() {
        this.route.navigate(['tabs/profile']);
    }

    goToArticles() {
        this.route.navigate(['tabs/articles']);
    }

    goToTrainers() {
        this.route.navigate(['tabs/trainers']);
    }

    goToSettings() {
        this.route.navigate(['tabs/settings']);
    }
}
