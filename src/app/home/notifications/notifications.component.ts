import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/model/user.service';
import { NewsDetailComponent } from 'src/app/pages/news-detail/news-detail.component';
import { StorageService } from 'src/app/model/storage.service';
import { LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
    public notifications = [];
    public loading: Boolean = true;
    constructor(private router: Router, private userService: UserService, private storage: StorageService, private loadingCtrl: LoadingController) { }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                if (event.url == '/home/notifications') {
                    //this.getNotifications();
                }
            }
        });
        //this.getNotifications();
    }

    async getNotifications() {
        const loading = await this.loadingCtrl.create({
            message: 'Please wait ...'
        });
        await loading.present();
        let form = new FormData;
        form.set('user_id', this.storage.getUserInformation('id'));
        this.userService.getNotifications(form).subscribe((res: any) => {
            loading.dismiss();
            if (res.data.status) {
                this.loading = false;
                this.notifications = res.data.data;
            }
        }, err => { console.log(err); });
    }
    home() {
        this.router.navigate(['/home']);
    }

    redirectNews(news) {
        let form = new FormData;
        form.set('user_id', this.storage.getUserInformation('id'));
        form.set('news_id', news.id),
            this.userService.readNews(form).subscribe((res: any) => {
                if (res.data.status) {
                    this.router.navigate(['/news/' + news.id]);
                } else {

                }
            });

    }

    clearNotifications() {
        let form = new FormData;
        form.set('user_id', this.storage.getUserInformation('id'));
        this.userService.clearNotifications(form).subscribe((res: any) => {
            if (res.data.status) {
                this.getNotifications();
            }
        }, (err: any) => { });
    }

}
