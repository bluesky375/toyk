import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../model/user.service';
import { StorageService } from '../model/storage.service';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { Alert } from 'selenium-webdriver';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styles: ['.no-records{ padding: 20px;background: #e1e1e1;height: 100vh;}']
})
export class HomePage implements OnInit {
    public news: any = [];
    public form = new FormData;
    public today = "active";
    public recent = "";
    public totalUnread = 0;
    private eventsSubject: Subject<void> = new Subject<void>();
    private page = 0;
    public refreshStatus: Boolean = false;
    public filter_search: Boolean = false;
    @ViewChild('search_menu', {static: false}) search_menu;
    public searchClass = '';
    @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
    public keyword;
    constructor(private user: UserService, private userInfo: StorageService, public loadingCtrl: LoadingController, private router: Router, private route: ActivatedRoute) {

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                if (event.url == '/home') {

                    let data = this.user.getData();
                    this.keyword = this.searchClass = '';
                    this.filter_search = false;
                    if (typeof data != "undefined" && typeof data != undefined) {

                        let categories = data.categories || [];
                        let formData = data.form;
                        if (typeof data.search != 'undefined')
                            this.searchClass = 'search';

                        if (typeof data.filter != 'undefined')
                            this.filter_search = true;

                        if (formData.search_type == 'custom') {
                            this.form.set('from', formData.from);
                            this.form.set('to', formData.to);
                        }
                        let search_type = formData.search_type || '';
                        this.keyword = formData.keyword || '';
                        this.form.set('category_id', categories.toString());
                        this.form.set('keyword', this.keyword);
                        this.form.set('search_type', search_type);

                    } else {
                        this.form = new FormData;

                    }
                    if (this.recent == 'active') {
                        this.getRecentNews();
                    } else {
                        //this.getNews(1);
                    }
                }
            } else {
                // this.getNews(1);
            }

        });
        // this.getNews(1); 
    }

    ngOnInit() {
        this.getNews(1);
    }

    getNews(load = 2, evt = null) {
        this.today = 'active';
        this.recent = '';
        if (load == 2)
            this.searchClass = '';

        this.page = 0;
        this.news = [];
        console.log(evt);
        this.loadNews(evt);
    }

    async loadNews(evt) {

        const loading = await this.loadingCtrl.create({
            message: 'Please wait ...'
        });
        await loading.present();
        let user_id = this.userInfo.getUserInformation('id');
        this.form.set('user_id', user_id);
        this.user.getNews(this.page, this.form).subscribe((res: any) => {
            loading.dismiss();
            if (evt != null)
                evt.target.complete();
            // this.news.push(res.data.data.news);
            let news = res.data.data.news;
            if (news.length < 10 && evt != null) {
                evt.target.disabled = true;
            }
            let i = 0;
            while (i < news.length) {
                this.news.push(news[i]);
                i++;
            }
            this.totalUnread = res.data.data.totalUnreadNews;
        },
            err => {

            });
    }

    async loadNewsLike(evt) {
        // const loading = await this.loadingCtrl.create({
        //     message: 'Please wait ...'
        // });
        // await loading.present();
        let user_id = this.userInfo.getUserInformation('id');
        this.form.set('user_id', user_id);
        this.user.getNews(this.page, this.form).subscribe((res: any) => {
            // loading.dismiss();
            if (evt != null)
                evt.target.complete();
            this.news = res.data.data.news;
            this.totalUnread = res.data.data.totalUnreadNews;
        },
            err => {

            });
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
        this.user.addLike(form).subscribe((res: any) => {
            // loading.dismiss();
            // this.loadNewsLike(null);
            let ind = this.news.findIndex((elem:any)=>{ return elem.News.id==news.id; });
            console.log(ind);
            this.news[ind].News.isLike = res.data.data.news.News.isLike;
            this.news[ind].News.total_likes = res.data.data.news.News.total_likes;
            this.news[ind].News.isUnLike = res.data.data.news.News.isUnLike;
            this.news[ind].News.total_dislikes = res.data.data.news.News.total_dislikes;
            if (res.status) {
                th.user.presentToast('News added in your likes.');
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
        form.set('news_id', newsId);
        form.set('status', '2');
        form.set('user_id', this.userInfo.getUserInformation('id'));
        let th = this;
        // const loading = await this.loadingCtrl.create({
        //     message: 'Please wait ...'
        // });
        // await loading.present();
        this.user.addLike(form).subscribe((res: any) => {
            // loading.dismiss();
            let ind = this.news.findIndex((elem:any)=>{ return elem.News.id==news.id; });
            this.news[ind].News.isLike = res.data.data.news.News.isLike;
            this.news[ind].News.total_likes = res.data.data.news.News.total_likes;
            this.news[ind].News.isUnLike = res.data.data.news.News.isUnLike;
            this.news[ind].News.total_dislikes = res.data.data.news.News.total_dislikes;
            if (res.status) {
                th.user.presentToast('News removed in your likes.');
            }
        }, err => {
            console.log(err);
        });
    }

    search(event) {
        this.form.set('category_id', event);
        this.loadNews(event);
    }

    async getRecentNews() {
        this.today = "";
        this.recent = 'active';
        this.searchClass = '';
        this.page = 0;
        this.news = [];
        this.loadRecentNews(null);
    }

    async loadRecentNews(evt) {
        const loading = await this.loadingCtrl.create({
            message: 'Please wait ...'
        });
        await loading.present();
        let user_id = this.userInfo.getUserInformation('id');
        this.form.set('user_id', user_id);
        this.user.getRecentNews(this.page, this.form).subscribe((res: any) => {
            loading.dismiss();
            if (evt != null)
                evt.target.complete();
            // this.news.push(res.data.data.news);
            let news = res.data.data;
            if (news.length < 10 && evt != null) {
                evt.target.disabled = true;
            }
            let i = 0;
            while (i < news.length) {
                this.news.push(news[i]);
                i++;
            }
            console.log(this.news);
        }, err => { });
    }

    searchByKeyword(f: any) {
        this.form.set('keyword', f.value.keyword);
        this.getNews();
        this.search_menu.nativeElement.style.height = "0%";
    }

    clearSearch() {
        this.form = new FormData();
        this.getNews();
        this.search_menu.nativeElement.style.height = "0%";
    }
    filter() {
        this.router.navigate(['/filter']);
    }

    shareMsg(news) {
        this.user.socialShare(news.title);
    }

    notification() {
        this.router.navigate(['home/notifications']);
    }
    openSearch() {
        this.router.navigate(['home/search']);
        // this.search_menu.nativeElement.style.height = "100%";
    }

    openMenu() {
        this.router.navigate(['menu']);
        // this.eventsSubject.next();
    }

    closeSearch() {
        this.search_menu.nativeElement.style.height = "0%";
    }

    viewDocument(news) {
        this.user.viewDocument(news);
    }

    loadData(evt) {
        this.page += 10;
        if (this.recent == 'active') {
            this.loadRecentNews(evt);
        } else {
            this.loadNews(evt);
        }
    }

    refresh(evt) {
        this.page = 0;
        this.news = [];
        this.refreshStatus = true;
        if (this.recent == 'active') {
            this.loadRecentNews(evt);
        } else {
            this.loadNewsRefresh(evt);
        }
    }

    async loadNewsRefresh(evt) {
        const loading = await this.loadingCtrl.create({
            message: 'Please wait ...'
        });
        await loading.present();
        let user_id = this.userInfo.getUserInformation('id');
        this.form.set('user_id', user_id);
        this.user.getNews(this.page, this.form).subscribe((res: any) => {
            loading.dismiss();
            this.refreshStatus = false;
            if (evt != null)
                evt.target.complete();
            this.news = res.data.data.news;
            this.totalUnread = res.data.data.totalUnreadNews;
        },
            err => {

            });
    }
}
