import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from '../models/menu-item-model.model';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCartItemList:MenuItemModel[] = []

  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToList(item:MenuItemModel):void
  {
    this.shoppingCartService.currentValue.subscribe((newItem) => {this.shoppingCartItemList.push(newItem)});
  }

}
