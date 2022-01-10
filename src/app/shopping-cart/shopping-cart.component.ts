import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from '../models/menu-item-model.model';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit
{

  shoppingCartItemList: MenuItemModel[] = []
  totalItemCost: number = 0;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void
  {
    this.shoppingCartService.addToShoppingCartObservable
      .subscribe((menuitem) => this.onAddToShoppingCart(menuitem))

      this.shoppingCartService.removeFromShoppingCartObservable
      .subscribe((menuItem) => this.onRemoveFromShoppingCart(menuItem));
  }

  onAddToShoppingCart(newItem: MenuItemModel): void
  {
    if(this.shoppingCartItemList.includes(newItem))
    {
      let index = this.shoppingCartItemList.indexOf(newItem);
      this.shoppingCartItemList[index].count++;
    }
    else
    {
      newItem.count = 1;
      this.shoppingCartItemList.push(newItem);
    }

    this.calcTotalItemCost();
  }

  onRemoveFromShoppingCart(itemToRemove: MenuItemModel): void
  {
    itemToRemove.count--;

    if(itemToRemove.count <= 0)
    {
      let index = this.shoppingCartItemList.indexOf(itemToRemove);
      this.shoppingCartItemList.splice(index, 1);
    }

    this.calcTotalItemCost();
  }

  calcTotalItemCost(): void
  {
    this.totalItemCost = 0;
    this.shoppingCartItemList.forEach((item) =>
    {
      this.totalItemCost += item.price * item.count;
    });
  }
}
