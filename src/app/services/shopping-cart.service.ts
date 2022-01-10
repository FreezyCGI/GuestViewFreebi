import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Subject } from 'rxjs';
import { MenuItemModel } from '../models/menu-item-model.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService
{
  private _addToShoppingCartObservable = new Subject<MenuItemModel>();
  public addToShoppingCartObservable = this._addToShoppingCartObservable.asObservable(); 

  private _removeFromShoppingCartObservable = new Subject<MenuItemModel>();
  public removeFromShoppingCartObservable = this._removeFromShoppingCartObservable.asObservable(); 

  private _openShoppingCartObservable = new Subject();
  public openShoppingCartObservable = this._openShoppingCartObservable.asObservable(); 

  constructor() { }

  addToShoppingCart(item: MenuItemModel):void
  {
    this._openShoppingCartObservable.next("");
    this._addToShoppingCartObservable.next(item);
  }

  removeFromShoppingCart(item: MenuItemModel):void
  {
    this._removeFromShoppingCartObservable.next(item);
  }

  openShoppingCart():void
  {
    this._openShoppingCartObservable.next("");
  }

}
