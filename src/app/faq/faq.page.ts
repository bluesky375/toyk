import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { StorageService } from 'src/app/model/storage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  constructor(private storage: StorageService, private router: Router, private alertController:AlertController) {
        //this.login = !this.storage.isLogin();
    }

  ngOnInit() {
  }
  openMenu() {
        this.router.navigate(['/menu']);
    }
}
