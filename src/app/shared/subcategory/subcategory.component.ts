import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked, Output, EventEmitter, ViewChild, ViewChildren, Input } from '@angular/core';
import { UserService } from 'src/app/model/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-subcategory',
    templateUrl: './subcategory.component.html',
    styleUrls: ['./subcategory.component.scss'],
})
export class SubcategoryComponent implements OnInit, AfterViewChecked {

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

    openCategory(event) {
        if (event.target.className.trim() == 'catg_accordion') {
            event.target.className = event.target.className + ' active';
            event.target.nextElementSibling.style.maxHeight = "256px";
        } else {
            event.target.className = 'catg_accordion';
            event.target.nextElementSibling.style.maxHeight = "0px";
        }
    }

    addClass(event) {

        if (event.target.className.trim() == '') {
            event.target.className = 'subcat-active';

        } else {
            event.target.className = '';
        }
    }

    onChangeCheckbox(event) {
        let val = event.target.value;
        let index = this.selectedCategories.indexOf(val);

        if (event.target.checked) {
            if (index < 0) {
                this.selectedCategories.push(val);
            }
        } else {
            if (index > -1) {
                this.selectedCategories.splice(index, 1);
            }
        }
        this.catSearch.emit(this.selectedCategories);
    }

    ngAfterViewChecked() {
        // this.changeCheckboxes(false);
        // this.selectCategories();
    }

    selectCategories() {
        let classes = document.getElementsByClassName('catego');

        for (let index = 0; index < classes.length; index++) {
            let element = <HTMLInputElement>classes[index];
            if (element.checked) {
                if (this.selectedCategories.indexOf(element.value) < 0) {
                    this.selectedCategories.push(element.value);
                }
            }
        }
        this.catSearch.emit(this.selectedCategories);
    }

    done() {
        this.catSearch.emit(this.selectedCategories);
        this.catg_side_nav.className = 'catg_accordion';
        this.catg_side_nav.nativeElement.style.maxHeight = "0px";
    }

    handleCategories(evt) {
        if (evt.target.checked) {
            this.changeCheckboxes(true);
        } else {
            this.changeCheckboxes(false);
        }
        this.catSearch.emit(this.selectedCategories);
    }

    changeCheckboxes(checked: boolean) {
        this.selectedCategories = [];
        this.subcat.forEach(element => {
            element.nativeElement.checked = checked;
            if (checked) {
                this.selectedCategories.push(element.nativeElement.value);
            }
        });
    }
	
     OpenMenu() {
        this.router.navigate(['menu']);
        // this.eventsSubject.next();
    }
	
	categoryrt() {
        this.router.navigate(['category']);
    }
	
	SubCat(id) {
        this.router.navigate(['subcategory']);
        // this.eventsSubject.next();
    }

    checkVal(selectedVal) {
        let catArray = this.selectedCat.split(',');
        if (catArray.indexOf(selectedVal) > -1)
            return true;
        return false;
    }
}
