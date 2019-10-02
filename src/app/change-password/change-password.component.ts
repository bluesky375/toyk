import { Component, OnInit } from '@angular/core';
import { UserService } from '../model/user.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from '../model/storage.service';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styles: ['.container{height: 100vh;}', '.error-msg{color:red;padding:5px;}']
})
export class ChangePasswordComponent implements OnInit {
    public errors: any;
    public className:string = "fa-eye";
    public classNameFirst:string = "fa-eye";
    constructor(private userService: UserService, private loadingCtrl: LoadingController, public router: Router, private userInfo: StorageService) { }

    ngOnInit() { }

    async onSubmit(f: any) {
        this.errors = [];
        const loading = await this.loadingCtrl.create({
            message: 'Please wait...'
        });
        await loading.present();
        let user_id = this.userInfo.getUserInformation('id');
        let th = this;
        this.userService.changePassword(f.value.password, f.value.confirm_password, user_id).subscribe((res: any) => {
            loading.dismiss();
            if (res.data.status) {
                th.userService.presentToast('Password updated successfully.');
            } else {
                this.errors = res.data.errors;
            }
        }, err => { console.log(err); });
    }

    showPassword() {
        if (this.className == 'fa-eye') {
            this.className = 'fa-eye-slash';
            document.getElementById('confirm_password').setAttribute('type', 'text');
        } else {
            this.className = 'fa-eye';
            document.getElementById('confirm_password').setAttribute('type', 'password');
        }
    }

    showPasswordFirst() {
        if (this.classNameFirst == 'fa-eye') {
            this.classNameFirst = 'fa-eye-slash';
            document.getElementById('password').setAttribute('type', 'text');
        } else {
            this.classNameFirst = 'fa-eye';
            document.getElementById('password').setAttribute('type', 'password');
        }
    }
}
