import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { StorageService } from 'src/app/model/storage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mybuyers',
  templateUrl: './mybuyers.page.html',
  styleUrls: ['./mybuyers.page.scss'],
})
export class MybuyersPage implements OnInit {

  
   public userInfo;
  constructor(private storageInfo: StorageService, private router:Router) {
    this.userInfo = this.storageInfo.getUserInformation();
    console.log(this.userInfo)
  }

  ngOnInit() {
  }

     myaccount() {
        this.router.navigate(['/myaccount']);
    }
	
	creatad() {
        this.router.navigate(['/createad']);
    }

}
