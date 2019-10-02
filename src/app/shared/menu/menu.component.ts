import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { StorageService } from 'src/app/model/storage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    @Input() event: Observable<void>;
    public totalUnread = 0;
    @ViewChild('menu_side_nav', {static: false}) menu_side_nav;
    public login: boolean = true;
    constructor(private storage: StorageService, private router: Router, private alertController:AlertController) {
        this.login = !this.storage.isLogin();
    }

    ngOnInit() {
        // this.event.subscribe(() => {
        //     this.openMenu();
        // });
    }

    logout() {
        this.presentAlertConfirm();
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
                        this.storage.logout();
                        this.login = true;
                        this.router.navigate(['/login']);
                        this.menu_side_nav.nativeElement.style.display = "none";
                    }
                }
            ]
        });

        await alert.present();
    }

    loginM() {
        this.router.navigate(['/login']);
    }
	
	contact() {
        this.router.navigate(['/contact']);
    }
	faq() {
        this.router.navigate(['/faq']);
    }
	creatad() {
        this.router.navigate(['/createad']);
    }
	
    changePassword() {
        this.router.navigate(['/change-password']);
    }

    openMenu() {
        this.menu_side_nav.nativeElement.style.display = "block";
    }
    home() {
        this.router.navigate(['/home']);
    }
    myaccount() {
        this.router.navigate(['/myaccount']);
    }

    about_us() {
        this.router.navigate(['/home/aboutus']);
    }

    terms() {
        this.router.navigate(['/home/terms']);
    }
	
	privacypolicy() {
        this.router.navigate(['/home/privacypolicy']);
    }

    notification() {
        this.router.navigate(['/home/notifications']);
    }
	category() {
        this.router.navigate(['category']);
    }
    openSearch() {
        this.router.navigate(['/home/search']);

        // this.search_menu.nativeElement.style.height = "100%";
    }

    closeMenu() {
        this.router.navigate(['home']);
    }

}