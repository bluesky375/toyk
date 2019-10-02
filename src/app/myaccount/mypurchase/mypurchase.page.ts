import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { StorageService } from 'src/app/model/storage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mypurchase',
  templateUrl: './mypurchase.page.html',
  styleUrls: ['./mypurchase.page.scss'],
})
export class MypurchasePage implements OnInit {

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
