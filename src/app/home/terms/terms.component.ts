import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/model/user.service';

@Component({
    selector: 'app-terms',
    templateUrl: './terms.component.html',
    styleUrls: ['./terms.component.scss'],
})
export class TermsComponent implements OnInit {

    public page: any;

    constructor(private router: Router, private userService: UserService) {
        this.userService.terms().subscribe((res: any) => {
            if (res.data.status) {
                this.page = res.data.data;
            }
        }, err => console.log(err));
    }


    ngOnInit() { }

    home() {
        this.router.navigate(['/home']);
    }
}
