import { Component, OnInit, Input } from '@angular/core';
import { MenuItemModel } from '../models/menu-item-model.model';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit
{
  @Input()
  menuItem: MenuItemModel = new MenuItemModel;

  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void
  {
  }

  onAddToShoppingCartClicked(): void
  {
    this.shoppingCartService.addToShoppingCart(this.menuItem);
    this.shoppingCartService.openShoppingCart();
  }

}
