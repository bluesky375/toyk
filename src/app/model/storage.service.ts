import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }

    storeUserInformation(user: any) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    getUserInformation(field=null) {
        let user = localStorage.getItem('user');
        let userArr = JSON.parse(user);
        if(field == null)
            return userArr;
        return userArr[field];
    }

    isLogin() {
        return (localStorage.getItem('user') == null )?false:true;
    }

    logout(){
        localStorage.removeItem('user');
    }
}
