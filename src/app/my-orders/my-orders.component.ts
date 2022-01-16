import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Order } from '../models/order.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit
{
  orderList: Order[] = [];

  constructor(private cookieService: CookieService,
    private orderService: OrderService) { }

  ngOnInit(): void
  {
    let tableId = this.cookieService.get("tableId");
    let jwt: string = this.cookieService.get("orderJWT");

    if (jwt == "")
    {
      console.log("jwt is empty");
      return;
    }

    if (tableId == "")
    {
      console.log("tableId is empty");
      return;
    }

    this.orderService.getAllOrders(tableId)
    .subscribe((orders: Order[]) =>
    {
      console.log(orders);
      this.orderList = orders;
    });

  }
}
