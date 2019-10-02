import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked, Output, EventEmitter, ViewChild, ViewChildren, Input } from '@angular/core';
import { UserService } from 'src/app/model/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stepthree',
  templateUrl: './stepthree.page.html',
  styleUrls: ['./stepthree.page.scss'],
})
export class StepthreePage implements OnInit {

    public categories: any;
	public id: any;
    public category: Array<string> = [];
    public selectedCategories = [];
    public className = "catego";
    @ViewChild('catg_side_nav', {static: false}) catg_side_nav;
    @Output() catSearch = new EventEmitter<Array<String>>();
    @ViewChildren('subcat') subcat;
    @Input() selectedCat: String = '';
    constructor(private route: ActivatedRoute, private userService: UserService, public router: Router) {

    }

  ngOnInit() {
	  this.id = this.route.snapshot.paramMap.get('id');
	  this.userService.getPlans().subscribe((res: any) => {
            this.categories = res.data.data;
			//console.log(res.data.data);
        }, err => { console.log(err); });
  }
  
    categoryrt() {
        this.router.navigate(['createad']);
    }
	
	SubCat(id) {
        this.router.navigate(['stepfour/'+id]);
        // this.eventsSubject.next();
    }

}
