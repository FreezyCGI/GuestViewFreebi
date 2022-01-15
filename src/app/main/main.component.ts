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

  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void { }

  openShoppingCart():void
  {
    this.shoppingCartService.openShoppingCart();
  }
}
