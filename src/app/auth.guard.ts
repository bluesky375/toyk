import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from './model/storage.service'

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private storage: StorageService, private router: Router) {

    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.isAuthenticated()) {
            let options:NavigationExtras = {
                skipLocationChange:true
            };
            this.router.navigate(['/login',options]);
        }
        return true;
    }

    isAuthenticated(): boolean {
        return this.storage.isLogin();
    }
}
