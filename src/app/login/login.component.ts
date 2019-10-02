import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../model/user.service';
import { LoadingController } from '@ionic/angular';
import { Route, Router } from '@angular/router';
import { StorageService } from '../model/storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    @ViewChild('password_', {static: false}) password_;
    public errors = [];
    public className:string = "fa-eye";
    public email="";
    public password="";

    constructor(public userService: UserService, public loadingCtrl: LoadingController, public router: Router, private storage: StorageService) {
        let user = this.storage.getUserInformation();
        if (user != null) {
            this.router.navigate(['/home']);
        }
        // this.userService.login('pankaj', '123456');
    }

    ngOnInit() { 
       
    }


    async onSubmit(form: any) {
        const loading = await this.loadingCtrl.create({
            message: 'Please wait...'
        });
        await loading.present();

        let th = this;
        this.userService.login(form.value.email, form.value.password).subscribe((res: any) => {
            if (res.data.status) {
                th.storage.storeUserInformation(res.data.user);
                this.router.navigate(['/home']);
            } else {
                this.errors = res.data.errors;

                if( res.data.message != '' ) {
                    th.userService.presentAlert(res.data.message);
                }
            }
        }, err => { });
        await loading.dismiss();
    }

    home() {
        this.router.navigate(['']);
    }

    showPassword() {
        if( this.className == 'fa-eye' ) {
            this.className = 'fa-eye-slash';
            this.password_.nativeElement.setAttribute('type','text');
        } else {
            this.className = 'fa-eye';
            this.password_.nativeElement.setAttribute('type','password');
        }
    }
}
