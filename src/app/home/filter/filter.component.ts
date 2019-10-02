import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/model/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

    public from: any = '';
    public to: any = '';
    public custom = false;
    public keyword = '';
    public categories = [];
    public formdata: any;
    public search_type = '';
    public selected_categories = [];
    constructor(private userService: UserService, private router: Router) {
        if (typeof this.userService.getData() != "undefined") {
            this.formdata = this.userService.getData();

            if (typeof this.formdata != "undefined") {
                if (typeof this.formdata.form != "undefined")
                    this.search_type = this.formdata.form.search_type;
                if (typeof this.formdata.categories != "undefined")
                    this.selected_categories = this.formdata.categories;
            }
        }
        if (this.search_type == 'custom')
            this.custom = true;
    }

    ngOnInit() {
        console.log(this.formdata);
    }

    addCategory(res) {
        this.categories = res;
    }

    onChnge(e) {
        if (e.detail.value == 'custom') {
            this.custom = true;
        } else {
            this.custom = false;
        }
    }

    showDatepicker(custom = 'from') {
        let options = {
            date: new Date(),
            mode: 'date'
        }
        this.userService.showDatepicker(options).then((date) => {
            var month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
            var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

            var fullDate = date.getFullYear() + '-' + month + '-' + day;
            if (custom == 'from')
                this.from = fullDate;
            else
                this.to = fullDate;

        }, err => {

        });;
    }

    onSubmit(form) {
        let data = {
            form: form.value,
            categories: this.categories,
            filter: true
        };
        this.userService.setData(data);
        this.router.navigate(['/home']);
    }

    reset() {
        this.userService.clearData();
        this.router.navigate(['/home']);
    }
}
