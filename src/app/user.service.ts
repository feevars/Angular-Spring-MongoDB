import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser(): User{
    let user = new User()
    user.name = "Fernanda"
    user.email = "feevars@gmail.com"

    return user
  }

  public listUsers():User[]{
    return [
      { name:"fernanda",
      email:"feevars@gmail.com"
      },
      { name:"bruno",
      email:"bruno@gmail.com"
      },
      { name:"luiz",
      email:"luiz@gmail.com"
      }
    ]
  }
}
