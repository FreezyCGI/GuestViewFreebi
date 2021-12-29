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
  shoppingCartActive: boolean = true;

  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void
  {

  }

  onBtnShoppingCartClickedEvent(event:MouseEvent)
  {
    this.shoppingCartActive = true;
  }

}
