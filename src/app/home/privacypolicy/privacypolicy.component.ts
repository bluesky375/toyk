

import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/model/user.service';

@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.scss'],
})
export class privacypolicyComponent implements OnInit {
  public page:any;
  constructor(private router:Router, private userService:UserService) {
    this.userService.privacypolicy().subscribe((res:any)=>{
      if(res.data.status) {
        this.page = res.data.data;
      }
    }, err=> console.log(err));
   }

  ngOnInit() { }
  home() {
    this.router.navigate(['/home']);
  }
}
