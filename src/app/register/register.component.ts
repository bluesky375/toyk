import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../model/user.service';
import { LoadingController } from '@ionic/angular';
import { Route, Router } from '@angular/router';
import { StorageService } from '../model/storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
        this.userService.register(form.value.email, form.value.password, form.value.phone, form.value.first_name, form.value.last_name, form.value.confirm_password, form.value.address, form.value.country_code, form.value.terms).subscribe((res: any) => {
            console.log(form.value);
			
			if (res.data.status) {
				console.log(res.data.status);
                th.storage.storeUserInformation(res.data.msg);
				
				    
                //this.router.navigate(['/login']);
            } else {
                this.errors = res.data.error;
                 //console.log(res.data);
                if( res.data.msg != '' ) {
                    th.userService.presentAlert(res.data.msg);
                }
            }
        }, err => { });
		//console.log(res.data);
        await loading.dismiss();
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
