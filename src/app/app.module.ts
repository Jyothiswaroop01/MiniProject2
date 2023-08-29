import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { UserComponent } from './user/user.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UserregisterComponent } from './user/userregister/userregister.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { UsercurdComponent } from './admin/usercurd/usercurd.component';
import { FormComponent } from './admin/form/form.component';
import { AdmincurdComponent } from './admin/admincurd/admincurd.component';
import { MenuComponent } from './admin/menu/menu.component';
import { DashboardAuthentication} from './Security/secure';
import { userservice } from './Service/user.service';
import { DashboardAuthentication1 } from './Security/secure1';
import { CartComponent } from './items/cart/cart.component';
import { TodaybillsComponent } from './admin/todaybills/todaybills.component';
import { MonthlybillsComponent } from './admin/monthlybills/monthlybills.component';
import { CartformComponent } from './items/cartform/cartform.component';
import { PaybillComponent } from './user/paybill/paybill.component';
import { ItemsComponent } from './items/items.component';


const myroute:Routes=[
  {path:'Admin',component:AdminComponent},
  {path:'Adminhome',component:AdminhomeComponent, canActivate:[DashboardAuthentication1]},
  {path:'User',component:UserComponent},
  {path:'Userlogin',component:UserloginComponent},
  {path:'Userregister',component:UserregisterComponent},
  {path:'Usercurd',component:UsercurdComponent},
  {path:'Form',component:FormComponent},
  {path:'Admincurd',component:AdmincurdComponent},
  {path:'Items',component:ItemsComponent},
  {path:'Menu',component:MenuComponent},
  {path:'Main',component:AppComponent},
  {path:'Cart',component:CartComponent},
  {path:'Todaybill',component:TodaybillsComponent},
  {path:'Monthlybill',component:MonthlybillsComponent},
  {path:'Cartform',component:CartformComponent},
  {path:'Paybill',component:PaybillComponent},
  {path:'Userhome',component:UserhomeComponent, canActivate:[DashboardAuthentication]}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminhomeComponent,
    UserComponent,
    UserloginComponent,
    UserregisterComponent,
    UserhomeComponent,
    UsercurdComponent,
    FormComponent,
    AdmincurdComponent,
    MenuComponent,
    CartComponent,
    TodaybillsComponent,
    MonthlybillsComponent,
    CartformComponent,
    PaybillComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(myroute),HttpClientModule,ReactiveFormsModule
  ],
  providers: [userservice,DashboardAuthentication,DashboardAuthentication1],
  bootstrap: [AppComponent]
})
export class AppModule { }
