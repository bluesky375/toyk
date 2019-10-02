import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { UserService } from 'src/app/model/user.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    public keyword = "";
    constructor(private router: Router, private userService: UserService) {
        let data = this.userService.getData();
        if (typeof data != "undefined") {
            this.keyword = data.form.keyword || '';
        }
    }

    ngOnInit() { }

    searchByKeyword(f: any) {

        let data = {
            form: f.value,
            categories: [],
            search: true
        };
        this.userService.setData(data);
        this.router.navigate(['/home']);
    }

    clearSearch() {
        this.userService.clearData();
        this.router.navigate(['/home']);
    }

    home() {
        this.router.navigate(['/home']);
    }
}
