import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { AuthGuard } from './auth.guard';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FilterComponent } from './home/filter/filter.component';
import { CategoryComponent } from './shared/category/category.component';
import { SubcategoryComponent } from './shared/subcategory/subcategory.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'subcategory/:id', component: SubcategoryComponent },
  { path: 'forgot_password', component: ForgotPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'news/:id', component: NewsDetailComponent, canActivate: [AuthGuard] },
  { path: 'filter', component: FilterComponent },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'createad', loadChildren: './createad/createad.module#CreateadPageModule' },
  { path: 'steptwo/:id', loadChildren: './createad/steptwo/steptwo.module#SteptwoPageModule' },
  { path: 'stepthree/:id', loadChildren: './createad/stepthree/stepthree.module#StepthreePageModule' },
  { path: 'stepfour/:id', loadChildren: './createad/stepfour/stepfour.module#StepfourPageModule' },
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule' },
  { path: 'myaccount', loadChildren: './myaccount/myaccount.module#MyaccountPageModule' },
  { path: 'dashboard', loadChildren: './myaccount/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'changepassword', loadChildren: './myaccount/changepassword/changepassword.module#ChangepasswordPageModule' },
  { path: 'mypurchase', loadChildren: './myaccount/mypurchase/mypurchase.module#MypurchasePageModule' },
  { path: 'myads', loadChildren: './myaccount/myads/myads.module#MyadsPageModule' },
  { path: 'mytransaction', loadChildren: './myaccount/mytransaction/mytransaction.module#MytransactionPageModule' },
  { path: 'mybuyers', loadChildren: './myaccount/mybuyers/mybuyers.module#MybuyersPageModule' },
  { path: 'myfollowers', loadChildren: './myaccount/myfollowers/myfollowers.module#MyfollowersPageModule' },
  { path: 'sellersyoufollow', loadChildren: './myaccount/sellersyoufollow/sellersyoufollow.module#SellersyoufollowPageModule' },
  { path: 'wishlist', loadChildren: './myaccount/wishlist/wishlist.module#WishlistPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
