import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Subject } from 'rxjs';
import { MenuItemModel } from '../models/menu-item-model.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService
{
  private _shoppingCartObservable = new Subject<MenuItemModel>();
  public shoppingCartObservable = this._shoppingCartObservable.asObservable(); 

  private _openShoppingCartObservable = new Subject();
  public openShoppingCartObservable = this._openShoppingCartObservable.asObservable(); 

  constructor() { }

  addToShoppingCart(item: MenuItemModel):void
  {
    this._openShoppingCartObservable.next("");
    this._shoppingCartObservable.next(item);
  }

  openShoppingCart():void
  {
    this._openShoppingCartObservable.next("");
  }

}
