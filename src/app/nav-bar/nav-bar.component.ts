import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  links = [
    {link: '/home', iconName: 'home', name: 'Home'}, 
    {link: '/all', iconName: 'menu_book', name: 'Menu'}, 
    {link: '/myOrders', iconName: 'shopping_bag', name: 'My Orders'}, 
    {link: '/reviews', iconName: 'mode_edit', name: 'Reviews'}];
  activeLink = this.links[0];

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
