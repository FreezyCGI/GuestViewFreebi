import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() onBtnShoppingCartClickedEvent = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onBtnShoppingCartClicked(event:MouseEvent)
  {
    this.onBtnShoppingCartClickedEvent.emit(event);
  }

  onBtnCallWaiterClicked(event:MouseEvent){
    //ToDo: implement methode for the button - should porbably change color of nav and button should say waiter is called
  }

}
