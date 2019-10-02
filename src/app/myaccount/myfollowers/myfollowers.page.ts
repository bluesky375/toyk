import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { StorageService } from 'src/app/model/storage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-myfollowers',
  templateUrl: './myfollowers.page.html',
  styleUrls: ['./myfollowers.page.scss'],
})
export class MyfollowersPage implements OnInit {

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
