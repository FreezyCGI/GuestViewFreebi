import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { CookieService } from 'ngx-cookie-service';
import { MenuItemModel } from '../models/menu-item-model.model';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { SubmitOrderService } from '../services/submit-order.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit
{
  //shoppingCartItemList and totalItemCost dependant from shoppingCartService
  shoppingCartItemList: MenuItemModel[] = []
  totalItemCost: number = 0;

  constructor(private shoppingCartService: ShoppingCartService, 
    private submitOrderService:SubmitOrderService,
    private cookieService:CookieService,
    private bottomSheetRef: MatBottomSheetRef<ShoppingCartComponent>) {  }

  ngOnInit(): void
  {
    this.onOpen();
    this.shoppingCartService.shoppingCartChangedObservable.subscribe(()=>{
      this.updateShoppingCart();
    });
  }

  onOpen():void
  {
    this.updateShoppingCart();
  }

  updateShoppingCart():void
  {
    this.totalItemCost = this.shoppingCartService.calcTotalItemCost();
    this.shoppingCartItemList = this.shoppingCartService.shoppingCartItemList;
  }

  submitOrder(): void
  {
    this.submitOrderService.submitOrder().subscribe((jwt) =>{
      this.cookieService.set("tableIdJWT", jwt.token, new Date().getDate() + 1);
      alert(jwt.token);
    });
  }
}
