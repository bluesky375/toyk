import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/model/user.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

    public errors;
    constructor(private userService: UserService) { }

    ngOnInit() { }

    onSubmit(f) {
        this.userService.forgotPassword(f.value.email).subscribe( (res:any) => {
            if(res.data.status) {
                this.userService.presentAlert(res.data.message);
            } else {
                if(res.data.message != '') {
                    this.userService.presentAlert(res.data.message);
                } else {
                    this.errors = res.data.errors;
                }
            }
        }, err=> { console.log(err) } );
    }
}
