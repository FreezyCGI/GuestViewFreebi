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
  totalItemCost:number = 0;

  constructor(private shoppingCartService:ShoppingCartService) { 
    
  }

  ngOnInit(): void {
    this.shoppingCartService.shoppingCartObservable.subscribe((newItem) => {
      this.shoppingCartItemList.push(newItem);
      this.calcTotalItemCost();
    });
  }

  calcTotalItemCost():void
  {
    this.totalItemCost = 0;
    this.shoppingCartItemList.forEach((item) => {
      this.totalItemCost += item.price;
    });
  }
}
