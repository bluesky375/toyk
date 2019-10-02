import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { StorageService } from 'src/app/model/storage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

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
