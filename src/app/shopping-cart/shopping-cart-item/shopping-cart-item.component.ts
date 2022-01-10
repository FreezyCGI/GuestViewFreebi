import { Component, Input, OnInit } from '@angular/core';
import { MenuItemModel } from 'src/app/models/menu-item-model.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  
  @Input()
  menuItem: MenuItemModel = new MenuItemModel;
  
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  onBtnPlusClicked():void
  {
    this.shoppingCartService.addToShoppingCart(this.menuItem);
  }

  onBtnMinusClicked():void
  {
    this.shoppingCartService.removeFromShoppingCart(this.menuItem);
  }

}
