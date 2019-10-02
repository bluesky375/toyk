import { Component, ViewChild } from '@angular/core';

import { Platform, IonRouterOutlet, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Route, Router } from '@angular/router';
import { UserService } from './model/user.service';
import { StorageService } from './model/storage.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    @ViewChild(IonRouterOutlet, {static: false}) routerOutlet: IonRouterOutlet;
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private router: Router,
        public alertController: AlertController,
        public storageService: StorageService) {
        this.initializeApp();
        this.platform.backButton.subscribe(() => {
            if (this.router.url === '/login') {
                this.storageService.logout();
                navigator['app'].exitApp();
            } else if (this.router.url === '/home') {
                navigator['app'].exitApp();
                // let res = confirm('Are you sure you want to logout?');
                // if (res) {
                //     this.storageService.logout();
                //     navigator['app'].exitApp();
                // }
                
                // this.presentAlertConfirm();
                return false;
            } else if (this.routerOutlet && this.routerOutlet.canGoBack()) {
              
                this.routerOutlet.pop();
            }
        });
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // this.storageService.logout();
            // this.statusBar.styleDefault();
            // this.splashScreen.show();
        });
    }

    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            header: 'Confirmation message',
            message: '<strong>Are you sure you want to logout?</strong>!!!',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        alert.dismiss();
                    }
                }, {
                    text: 'Ok',
                    handler: () => {
                        this.storageService.logout();
                        navigator['app'].exitApp();
                    }
                }
            ]
        });

        await alert.present();
    }

}
