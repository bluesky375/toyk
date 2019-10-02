import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ModelModule } from './model/model.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoryComponent } from './shared/category/category.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FilterComponent } from './home/filter/filter.component';
// import { ArrayStringPipe } from './pipes/array-string.pipe';


@NgModule({
    declarations: [AppComponent, LoginComponent, RegisterComponent, DashboardComponent, NewsDetailComponent, ForgotPasswordComponent, ChangePasswordComponent, FilterComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(), ModelModule, SharedModule, HttpClientModule, FormsModule],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
