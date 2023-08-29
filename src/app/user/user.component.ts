import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userservice } from '../Service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private mynavigation:Router,private ulog:userservice)
  {

  }
  Signin():void
  {
    this.mynavigation.navigate(['Userlogin'])
  }
  Signup():void
  {
    this.mynavigation.navigate(['Userregister'])
  }
}
