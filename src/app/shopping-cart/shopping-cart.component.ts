import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private submitOrderService: SubmitOrderService,
    private cookieService: CookieService,
    private router: Router) { }

  ngOnInit(): void
  {
    this.updateShoppingCart();
    this.shoppingCartService.shoppingCartChangedObservable.subscribe(() =>
    {
      this.updateShoppingCart();
    });
  }

  updateShoppingCart(): void
  {
    this.totalItemCost = this.shoppingCartService.calcTotalItemCost();
    this.shoppingCartItemList = this.shoppingCartService.shoppingCartItemList;
  }

  submitOrder(): void
  {
    this.submitOrderService.submitOrder(this.shoppingCartItemList)
      .subscribe((jwt) =>
      {
        this.shoppingCartService.clearShoppingCart();
        this.updateShoppingCart();
        this.cookieService.set("orderJWT", jwt.token, new Date().getDate() + 1);
               
        this.shoppingCartService.closeShoppingCart();
        setTimeout(() =>
        {
          this.router.navigateByUrl("/myOrders");
        }, 500);
      });
  }
}
