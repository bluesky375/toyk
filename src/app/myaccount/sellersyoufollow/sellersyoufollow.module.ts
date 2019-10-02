import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SellersyoufollowPage } from './sellersyoufollow.page';

const routes: Routes = [
  {
    path: '',
    component: SellersyoufollowPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SellersyoufollowPage]
})
export class SellersyoufollowPageModule {}
