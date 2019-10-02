import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
import { ModelModule } from '../model/model.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { CategoryComponent } from '../shared/category/category.component';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { privacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsComponent } from './terms/terms.component';
import { SearchComponent } from './search/search.component';
import { NgHighlightModule } from 'ngx-text-highlight';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NgHighlightModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            },
            {
                path: 'notifications',
                component: NotificationsComponent
            },
            {
                path: 'my_account',
                component: MyaccountComponent
            },
            {
                path: 'aboutus',
                component: AboutusComponent
            },
			 {
                path: 'privacypolicy',
                component: privacypolicyComponent
            },
            {
                path: 'terms',
                component: TermsComponent
            },
            {
                path: 'search',
                component: SearchComponent
            }
        ]),
        SharedModule,
        ModelModule
    ],
    declarations: [HomePage,NotificationsComponent,privacypolicyComponent,MyaccountComponent,AboutusComponent, TermsComponent,SearchComponent],
    providers:[SocialSharing, DatePicker]
})
export class HomePageModule { }
