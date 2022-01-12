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
  activeLink = {};

  @Output() onBtnShoppingCartClickedEvent = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
    this.setLink();
  }

  //Set Mat-tab-nav-bar to the right button in case of a site reload
  setLink():void
  {
    this.links.forEach((link) => {
      if(link.link == location.pathname)
      {
        this.activeLink = link;
      }
    });
  }

  onBtnShoppingCartClicked(event:MouseEvent)
  {
    this.onBtnShoppingCartClickedEvent.emit(event);
  }

  onBtnCallWaiterClicked(event:MouseEvent){
    //ToDo: implement methode for the button - should porbably change color of nav and button should say waiter is called
  }

}
