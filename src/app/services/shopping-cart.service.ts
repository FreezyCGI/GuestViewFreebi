import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItemModel } from '../models/menu-item-model.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

private messageSource = new BehaviorSubject<MenuItemModel>(new MenuItemModel);
currentValue = this.messageSource.asObservable();

  constructor() { }

  addToShoppingCart(item:MenuItemModel)
  {
    this.messageSource.next(item);
  }
}
