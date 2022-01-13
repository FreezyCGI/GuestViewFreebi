import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Subject } from 'rxjs';
import { MenuItemModel } from '../models/menu-item-model.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService
{
  private _shoppingCartChangedObservable = new Subject();
  public shoppingCartChangedObservable = this._shoppingCartChangedObservable.asObservable();  

  shoppingCartItemList: MenuItemModel[] = [];

  constructor() { }

  calcTotalItemCost(): number
  {
    let totalItemCost = 0;
    this.shoppingCartItemList.forEach((item) =>
    {
      totalItemCost += item.price * item.count;
    });

    return totalItemCost;
  }

  removeFromShoppingCart(itemToRemove: MenuItemModel): void
  {
    itemToRemove.count--;

    if (itemToRemove.count <= 0)
    {
      let index = this.shoppingCartItemList.indexOf(itemToRemove);
      this.shoppingCartItemList.splice(index, 1);
    }

    this._shoppingCartChangedObservable.next(0);
  }

  addToShoppingCart(newItem: MenuItemModel): void
  {
    if (this.shoppingCartItemList.includes(newItem))
    {
      let index = this.shoppingCartItemList.indexOf(newItem);
      this.shoppingCartItemList[index].count++;
    }
    else
    {
      newItem.count = 1;
      this.shoppingCartItemList.push(newItem);
    }

    this._shoppingCartChangedObservable.next(0);
  }

}
