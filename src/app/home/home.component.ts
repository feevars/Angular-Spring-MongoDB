import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user:User

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser()
  }

}
