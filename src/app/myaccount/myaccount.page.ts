import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { StorageService } from 'src/app/model/storage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {
  
  public userInfo;
  constructor(private storageInfo: StorageService, private router:Router) {
    this.userInfo = this.storageInfo.getUserInformation();
    console.log(this.userInfo)
  }

  ngOnInit() {
  }
    openMenu() {
        this.router.navigate(['/menu']);
    }
	
	myaccount() {
        this.router.navigate(['/home/my_account']);
    }
	dashboard()
	{ 
	    this.router.navigate(['/dashboard']);
	}
	
	changepassword()
	{
		this.router.navigate(['/changepassword']);
	}
	myad()
	{
		this.router.navigate(['/myads']);
	}
	mytrans()
	{
		this.router.navigate(['/mytransaction']);
	}
	mybuyers()
	{
		this.router.navigate(['/mybuyers']);
	}
	myfollowers()
	{
		this.router.navigate(['/myfollowers']);
	}
	sellersyoufollow()
	{
		this.router.navigate(['/sellersyoufollow']);
	}
	wishlist()
	{
		this.router.navigate(['/wishlist']);
	}
	mypur()
	{
		this.router.navigate(['/mypurchase']);
	}
}
