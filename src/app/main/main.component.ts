import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit
{
  title = 'GuestViewFreebi';

  constructor(private shoppingCartService: ShoppingCartService,
    private scroll: ViewportScroller) { }

  ngOnInit(): void { }

  openShoppingCart(): void
  {
    this.shoppingCartService.openShoppingCart();
  }

  onBtnCallWaiterClicked(event: MouseEvent)
  {
    //ToDo: implement methode for the button - should porbably change color of nav and button should say waiter is called
  }

  onBtnBackToTopClicked(event: MouseEvent)
  {
    //ToDo: implement methode for the button - should porbably change color of nav and button should say waiter is called
    this.scroll.scrollToPosition([0,0]);
  }
}
