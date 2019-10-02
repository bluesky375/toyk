import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked, Output, EventEmitter, ViewChild, ViewChildren, Input } from '@angular/core';
import { UserService } from 'src/app/model/user.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-createad',
  templateUrl: './createad.page.html',
  styleUrls: ['./createad.page.scss'],
})
export class CreateadPage implements OnInit {
  public categories: any;
  public category: Array<string> = [];
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
	  this.userService.getCategories().subscribe((res: any) => {
            this.categories = res.data.data;
			//console.log(res.data.data);
        }, err => { console.log(err); });
  }
  
  OpenMenu() {
        this.router.navigate(['home']);
        // this.eventsSubject.next();
    }
	
	SubCat(id) {
        this.router.navigate(['steptwo/'+id]);
        // this.eventsSubject.next();
    }

}
