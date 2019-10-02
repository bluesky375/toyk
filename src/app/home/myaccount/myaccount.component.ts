import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/model/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss'],
})
export class MyaccountComponent implements OnInit {
  public userInfo;
  constructor(private storageInfo: StorageService, private router:Router) {
    this.userInfo = this.storageInfo.getUserInformation();
    console.log(this.userInfo)
  }

  ngOnInit() { }

  home() {
    this.router.navigate(['/myaccount']);
  }
}
