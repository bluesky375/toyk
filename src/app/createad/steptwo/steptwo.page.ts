import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked, Output, EventEmitter, ViewChild, ViewChildren, Input } from '@angular/core';
import { UserService } from 'src/app/model/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-steptwo',
  templateUrl: './steptwo.page.html',
  styleUrls: ['./steptwo.page.scss'],
})
export class SteptwoPage implements OnInit {

    public categories: any;
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
        this.getsubDetail();
    }

    getsubDetail() {
        let id = this.route.snapshot.paramMap.get('id');
        //let user_id = this.userInfo.getUserInformation('id');
        this.userService.getSubCategories(id).subscribe((res: any) => {
            this.categories = res.data.data;
        }, err => { console.log(err); });
    }
	
	categoryrt() {
        this.router.navigate(['createad']);
    }
	
	SubCat(id) {
        this.router.navigate(['stepthree/'+id]);
        // this.eventsSubject.next();
    }

}
