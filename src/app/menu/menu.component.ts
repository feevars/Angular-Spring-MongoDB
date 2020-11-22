import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public text:string;

  constructor() { }

  ngOnInit(): void {
    this.text="Hello"
  }

  click(){
    this.text="Clicked."
  }
}
