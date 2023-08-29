import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userservice } from '../../Service/user.service';

@Component({
  selector: 'app-usercurd',
  templateUrl: './usercurd.component.html',
  styleUrls: ['./usercurd.component.css']
})
export class UsercurdComponent {
  constructor(private mynavigation:Router,private ulog:userservice, private objservice:userservice)
  {

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
  getcustomerdetails()
  {
    
    this.objservice.getcustomerdata().subscribe(res => {
      console.log(res);
      this.temp = res;
    },err=>
    {
      console.log('Data Not loaded..!!!');
      this.msg = 'Data not loaded..!!!!'
    })
  }
  addcustomer():void
  {
    this.mynavigation.navigate(['Form']);    
  }
  delete(id:any):void
  {
    this.objservice.deletecustomer(id).subscribe(res=>{
        this.getcustomerdetails();
        alert('Data Deleted Sucessfully');
    },err=>{
      alert('unable to delete the record');
    })
  }

}
