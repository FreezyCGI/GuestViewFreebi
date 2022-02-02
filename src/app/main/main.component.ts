import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { elementAt } from 'rxjs';
import { CallWaiterService } from '../services/call-waiter.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit
{
  title = 'GuestViewFreebi';

  constructor(private shoppingCartService: ShoppingCartService,
    private scroll: ViewportScroller, 
    private _snackBar: MatSnackBar,
    private callWaiterService: CallWaiterService,
    private cookieService: CookieService) { }

  ngOnInit(): void { }

  openShoppingCart(): void
  {
    this.shoppingCartService.openShoppingCart();
  }

  onBtnCallWaiterClicked():void
  {
    let tableId = this.cookieService.get("tableId");

    if (tableId == "") {
      console.log("tableId is empty");
      return;
    }

    this.callWaiterService.postCallWaiter(tableId).subscribe();

    this._snackBar.open('Waiter has been called', '', {duration: 2000});
  }

  onBtnBackToTopClicked(event: MouseEvent)
  {
    this.scroll.scrollToPosition([0,0]);
  }
}
