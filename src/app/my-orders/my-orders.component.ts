import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Order } from '../models/order.model';
import { OrderService } from '../services/order.service';
import { Review } from '../models/review.model';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orderList: Order[] = [];

  constructor(private cookieService: CookieService,
    private orderService: OrderService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    let tableId = this.cookieService.get("tableId");
    let jwt: string = this.cookieService.get("orderJWT");

    if (jwt == "") {
      console.log("jwt is empty");
      return;
    }

    if (tableId == "") {
      console.log("tableId is empty");
      return;
    }

    this.orderService.getAllOrders(tableId)
      .subscribe((orders: Order[]) => {
        console.log(orders);
        this.orderList = orders;
      });

  }

  submit(starsString: string, menuItemId: number): void {
    if (starsString.trim() == "") {
      alert("stars must not be empty");
      return;
    }
    let review: Review = new Review();

    try {
      let stars = parseInt(starsString);

      if (stars > 5)
      {
        alert("max 5 stars");
        return;
      }
      if (stars < 0)
      {
        alert("min 1 star");
        return;
      }

      review.itemId=menuItemId;
      review.stars = stars;
      review.createdAt = new Date();
      
      

      this.reviewService.postReviewMenuItem(review).subscribe(() => window.location.reload());

    } catch (error) {
      console.log(error);
    }
  }

}
