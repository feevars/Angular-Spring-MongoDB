import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users:User[]

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users = this.userService.listUsers()
  }

}
