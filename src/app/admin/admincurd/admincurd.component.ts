import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userservice } from '../../Service/user.service';

@Component({
  selector: 'app-admincurd',
  templateUrl: './admincurd.component.html',
  styleUrls: ['./admincurd.component.css']
})
export class AdmincurdComponent {
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
  getmenulist()
  {
    this.objservice.getmenudata().subscribe(res => {
      console.log(res);
      this.temp = res;
    },err=>
    {
      console.log('Data Not loaded..!!!');
      this.msg = 'Data not loaded..!!!!'
    })
  }
  additems()
  {
    this.mynavigation.navigate(['Menu'])
  }
  delete(id:any):void
  {
    this.objservice.deletitem(id).subscribe(res=>{
        this.getmenulist();
        alert('Data Deleted Sucessfully');
    },err=>{
      alert('unable to delete the record');
    })
  }

}
