import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor(private cookieService:CookieService) { }

  ngOnInit(): void {
    let tableId = this.cookieService.get("tableId");
    alert(tableId);
  }

}
