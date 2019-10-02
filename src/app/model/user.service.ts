import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from './constants';
import { AlertController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
@Injectable()
export class UserService {
    private data;
    constructor(private http: HttpClient, public alertController: AlertController, public toast: ToastController, private share: SocialSharing, private datepicker: DatePicker, private documentViewer: DocumentViewer, private file: File, private transfer: FileTransfer, private platform: Platform, private photoviewer: PhotoViewer, private loadingCtrl: LoadingController) {

    }

    login(username: string, password: string) {

        let apiUrl = Constants.API_ENDPOINT + 'userapi/login.json';
        let formData = {
            email: username,
            password: password
        };

        let options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        };
        return this.http.post(apiUrl, formData, options);
    }
	
	register(username: string, password: string, phone: string, first_name: string, last_name: string, confirm_password: string, address: string, country_code: string, terms: string) {

        let apiUrl = Constants.API_ENDPOINT + 'userapi/signup.json';
        let formData = {
			first_name: first_name,
			last_name: last_name,
			phone: phone,
            email: username,
            password: password,
			confirm_password: confirm_password,
            address: address,
			terms: terms,
            country_code: country_code
        };

        let options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        };
        return this.http.post(apiUrl, formData, options);
    }
	
	contact(name: string, email: string, subj: string, message: string) {

        let apiUrl = Constants.API_ENDPOINT + 'userapi/contact.json';
        let formData = {
			name: name,
			email: email,
			subj: subj,
            message: message
        };

        let options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        };
        return this.http.post(apiUrl, formData, options);
    }

    async presentAlert(msg) {
        const alert = await this.alertController.create({
            header: 'Message',
            message: msg,
            buttons: ['OK']
        });

        await alert.present();
    }

    getNews(page, formData) {
        let url = Constants.API_ENDPOINT + `/userapi/get_news/${page}.json`;
        return this.http.post(url, formData);
		//console.log(news);
    }

    getNewsDetail(id, user_id) {
        let url = Constants.API_ENDPOINT + `/userapi/getNewsInformation/${id}.json?user_id=${user_id}`;
		console.log(url);
        return this.http.get(url);
    }

    getCategories() {
        let url = Constants.API_ENDPOINT + `/userapi/getCategories.json`;
        return this.http.get(url);
    }
	
	getPlans() {
        let url = Constants.API_ENDPOINT + `/userapi/getplan.json`;
        return this.http.get(url);
    }
	
	getSubCategories(id) {
        let url = Constants.API_ENDPOINT + `/userapi/getSubCategories/${id}.json`;
        return this.http.get(url);
    }

    forgotPassword(email) {
        let apiUrl = Constants.API_ENDPOINT + 'userapi/forgotPassword.json';
        let formData = {
            email: email
        };

        let options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        };
        return this.http.post(apiUrl, formData, options);
    }

    addLike(formData) {
        let apiUrl = Constants.API_ENDPOINT + 'userapi/addLike.json';

        return this.http.post(apiUrl, formData);
    }

    async presentToast(msg) {
        const toast = await this.toast.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }

    getRecentNews(page, formData) {
        let url = Constants.API_ENDPOINT + `/userapi/getRecentViewedNews/${page}.json`;
        return this.http.post(url, formData);
    }

    changePassword(password: string, confirm_password: string, user_id: string) {

        let apiUrl = Constants.API_ENDPOINT + 'userapi/changePassword.json';
        let formData = {
            password: password,
            confirm_password: confirm_password,
            id: user_id
        };

        let options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        };
        return this.http.post(apiUrl, formData, options);
    }

    socialShare(msg) {
        this.share.share(msg, 'Toyk', 'https://globizdevserver.com/toyk/img/logo/logo.png','https://play.google.com/store/apps/details?id=com.khaleejtimes');
    }

    showDatepicker(options) {
        options.androidTheme = this.datepicker.ANDROID_THEMES.THEME_HOLO_DARK;
        return this.datepicker.show(options)
    }

    setData(data) {
        this.data = data;
    }

    clearData() {
        this.data = undefined;
    }
    getData() {
        return this.data;
    }

    getNotifications(form) {
        let url = Constants.API_ENDPOINT + '/userapi/getNotifications.json';
        return this.http.post(url, form);
    }

    clearNotifications(form) {
        let url = Constants.API_ENDPOINT + `/userapi/clearNotifications.json`;
        return this.http.post(url, form);
    }

    async viewDocument(news) {
        let path = null;

        if (this.platform.is('ios')) {
            path = this.file.documentsDirectory;
        } else {
            path = this.file.dataDirectory;
        }
        const options: DocumentViewerOptions = {
            title: news.title
        }
        const transfer = this.transfer.create();
        const loading = await this.loadingCtrl.create({
            message: 'Opening PDF file ...'
        });
        await loading.present();

        transfer.download(news.file, path + news.title).then(entry => {
            let url = entry.toURL();
            this.documentViewer.viewDocument(url, 'application/pdf', options)
            loading.dismiss();
        });
    }

    about_us() {
        let url = Constants.API_ENDPOINT + `/userapi/about_us.json`;
        return this.http.get(url);
    }

    terms() {
        let url = Constants.API_ENDPOINT + `/userapi/terms.json`;
        return this.http.get(url);
    }
	
	privacypolicy() {
        let url = Constants.API_ENDPOINT + `/userapi/privacypolicy.json`;
        return this.http.get(url);
    }

    openImage(imgUrl) {
        this.photoviewer.show(imgUrl);
    }

    readNews(form) {
        let url = Constants.API_ENDPOINT + `/userapi/readNews.json`;
        return this.http.post(url, form);
    }

    async downloadVideo(news) {
        let path = null;
      
        if (this.platform.is('ios')) {
            path = this.file.documentsDirectory;
        } else {
            path = this.file.dataDirectory;
        }
        const options: DocumentViewerOptions = {
            title: news.title
        }
        const transfer = this.transfer.create();
        const loading = await this.loadingCtrl.create({
            message: 'Downloading ...'
        });
        await loading.present();alert(news.file);
        transfer.download(news.file, path + news.title).then(entry => {
            loading.dismiss();
        });
    }
}
