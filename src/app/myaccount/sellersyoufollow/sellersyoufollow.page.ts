import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { StorageService } from 'src/app/model/storage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sellersyoufollow',
  templateUrl: './sellersyoufollow.page.html',
  styleUrls: ['./sellersyoufollow.page.scss'],
})
export class SellersyoufollowPage implements OnInit {

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

}
