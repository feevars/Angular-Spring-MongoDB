import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['../user.component.css']
})
export class UserRegisterComponent implements OnInit {

  public user:User = new User()
  constructor() { }

  ngOnInit(): void {
  }

  public save(){
    console.log(this.user)
    alert("Successfully saved.")
  }

}
