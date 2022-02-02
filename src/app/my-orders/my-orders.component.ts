import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Order } from '../models/order.model';
import { OrderService } from '../services/order.service';
import { Review } from '../models/review.model';
import { ReviewService } from '../services/review.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orderList: Order[] = [];
  newRating:number = 1;

  constructor(private cookieService: CookieService,
    private orderService: OrderService, private reviewService: ReviewService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let tableId = this.cookieService.get("tableId");
    let jwt: string = this.cookieService.get("orderJWT");

    // if (jwt == "") {
    //   console.log("jwt is empty");
    //   return;
    // }

    if (tableId == "") {
      console.log("tableId is empty");
      return;
    }

    this.orderService.getAllOrders(tableId)
      .subscribe((orders: Order[]) => {
        console.log(orders);
        this.orderList = orders;
        this.orderList.forEach((order) =>{
          order.orderDate = new Date(order.orderDate);

          let totalCost = 0;
          order.menuItems.forEach(menuItem => {
            totalCost += menuItem.price * menuItem.count;
          });
          order.totalCost = totalCost;
        });
      });

  }

  submit( menuItemId: number): void {
    let review: Review = new Review();

    try {

      review.itemId=menuItemId;
      review.stars = this.newRating;
      review.createdAt = new Date();
      
      

     this.reviewService.postReviewMenuItem(review).subscribe();

     this._snackBar.open('Item has been rated', 'Okay', {duration: 7000});

    } catch (error) {
      console.log(error);
    }
  }

  onRateReview(rating:number):void{
    this.newRating = rating;
  }

}
