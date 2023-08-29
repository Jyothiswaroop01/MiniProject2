import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userservice } from '../../Service/user.service';

@Component({
  selector: 'app-todaybills',
  templateUrl: './todaybills.component.html',
  styleUrls: ['./todaybills.component.css']
})
export class TodaybillsComponent {
  session?:any;
  constructor(private mynavigation:Router,private ulog:userservice, private objservice:userservice)
  {
    this.session = sessionStorage.getItem("Uname")
  }
  usercrud():void
  {
    this.mynavigation.navigate(['Usercurd'])
  }
  admincrud():void
  {
    this.mynavigation.navigate(['Admincurd'])
  }
  todaybills():void
  {
    this.mynavigation.navigate(['Todaybill'])
  }
  monthlybills():void
  {
    this.mynavigation.navigate(['Monthlybill'])
  }
  logoutUser():void
  {
    sessionStorage.removeItem("Uname");
    this.mynavigation.navigate(['Admin'])
  }
  temp:any = [];
  msg?:any;
  //Need to apply DI for user service class 
  gettodaybills()
  {
    this.objservice.gettodaybills().subscribe(res => {
      console.log(res);
      this.temp = res;
    },err=>
    {
      console.log('Data Not loaded..!!!');
      this.msg = 'Data not loaded..!!!!'
    })
  } 

}
