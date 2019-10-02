import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/model/user.service';
import { StorageService } from 'src/app/model/storage.service';
import { LoadingController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.component.html',
    styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent implements OnInit {

    public news_detail;
    constructor(private route: ActivatedRoute, private userService: UserService, private userInfo: StorageService, public loadingCtrl: LoadingController, private router: Router, private location: Location) { }

    ngOnInit() {
        this.getNewsDetail();
    }

    getNewsDetail() {
        let id = this.route.snapshot.paramMap.get('id');
        let user_id = this.userInfo.getUserInformation('id');
        this.userService.getNewsDetail(id, user_id).subscribe((res: any) => {
            this.news_detail = res.data.data;
        }, err => { console.log(err); });
    }
    async addLike(news) {
        // if (news.isLike > 0) {
        //     return;
        // }
        let newsId = news.id;
        let form = new FormData;
        form.append('news_id', newsId);
        form.append('status', '1');
        form.append('user_id', this.userInfo.getUserInformation('id'));
        let th = this;
        // const loading = await this.loadingCtrl.create({
        //     message: 'Please wait ...'
        // });
        // await loading.present();
        this.userService.addLike(form).subscribe((res: any) => {
            // loading.dismiss();
            this.news_detail.News.isLike = res.data.data.news.News.isLike;
            this.news_detail.News.total_likes = res.data.data.news.News.total_likes;
            this.news_detail.News.isUnLike = res.data.data.news.News.isUnLike;
            this.news_detail.News.total_dislikes = res.data.data.news.News.total_dislikes;

            if (res.status) {
                th.userService.presentToast('News added in your likes.');
            }
        }, err => {
            console.log(err);
        });
    }

    async addUnLike(news) {
        // if (news.isUnLike > 0) {
        //     return;
        // }
        let newsId = news.id;
        let form = new FormData;
        form.append('news_id', newsId);
        form.append('status', '2');
        form.append('user_id', this.userInfo.getUserInformation('id'));
        let th = this;
        // const loading = await this.loadingCtrl.create({
        //     message: 'Please wait ...'
        // });
        // await loading.present();
        this.userService.addLike(form).subscribe((res: any) => {
            // loading.dismiss();
            this.news_detail.News.isLike = res.data.data.news.News.isLike;
            this.news_detail.News.total_likes = res.data.data.news.News.total_likes;
            this.news_detail.News.isUnLike = res.data.data.news.News.isUnLike;
            this.news_detail.News.total_dislikes = res.data.data.news.News.total_dislikes;
            if (res.status) {
                th.userService.presentToast('News removed in your likes.');
            }
        }, err => {
            console.log(err);
        });
    }

    back() {
        this.location.back();
    }

    shareMsg(news) {
        this.userService.socialShare(news.title);
    }

    viewDocument(news) {
        this.userService.viewDocument(news);
    }

    openImage(imageUrl) {
        this.userService.openImage(imageUrl);
    }

    download(news) {
        this.userService.downloadVideo(news);
    }
}
