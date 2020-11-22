import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  states:any

  constructor(private stateService:StateService) { }

  ngOnInit(): void {
    this.stateService.getState().subscribe(
      response => {
        this.states = response
      }
    )
  }

}
