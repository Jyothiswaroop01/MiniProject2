import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userservice } from '../../Service/user.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {
  session?:any;
  constructor(private mynavigation:Router,private ulog:userservice)
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
}

