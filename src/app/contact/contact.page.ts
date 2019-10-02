import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UserService } from '../model/user.service';
import { LoadingController } from '@ionic/angular';
import { Route, Router } from '@angular/router';
import { StorageService } from '../model/storage.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(public userService: UserService, public loadingCtrl: LoadingController, public router: Router, private storage: StorageService) {
        let user = this.storage.getUserInformation();
        if (user == null) {
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
        this.userService.contact(form.value.name, form.value.email, form.value.subj, form.value.message).subscribe((res: any) => {
            console.log(form.value);
			
			if (res.data.status) {
				console.log(res.data);
				//this.showNotification.nativeElement.style.display = "block";
                //th.storage.storeUserInformation(res.data.msg);
				th.userService.presentAlert(res.data.msg);
				    
                this.router.navigate(['/home']);
            } else {
                //this.errors = res.data.error;
                 //console.log(res.data);
                if( res.data.msg != '' ) {
                    th.userService.presentAlert(res.data.msg);
                }
            }
        }, err => { });
		//console.log(res.data);
        await loading.dismiss();
    }
  
  
  
  openMenu() {
        this.router.navigate(['/menu']);
    }
	
	creatad() {
        this.router.navigate(['/createad']);
    }

}
