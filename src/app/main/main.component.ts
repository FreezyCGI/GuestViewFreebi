import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { elementAt } from 'rxjs';
import { CallWaiterService } from '../services/call-waiter.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit
{
  title = 'GuestViewFreebi';
  waiterCalled= false;

  constructor(private shoppingCartService: ShoppingCartService,
    private scroll: ViewportScroller, 
    private _snackBar: MatSnackBar,
    private callWaiterService: CallWaiterService,
    private cookieService: CookieService,
    private router: Router) { }

  ngOnInit(): void {

    this.router.events.subscribe((val) => {
      this.updateCallWaiterButton();
    });

    this.updateCallWaiterButton();
   }
   
   updateCallWaiterButton():void
   {
    let tableId = this.cookieService.get("tableId");
  
    if (tableId == "" || tableId == null|| tableId == undefined ) {
      console.log("tableId is empty");
      return;
    }

     this.callWaiterService.getStatus(tableId).subscribe((status) =>{
      this.waiterCalled = status;
    });
   }

  openShoppingCart(): void
  {
    this.shoppingCartService.openShoppingCart();
  }

  onBtnCallWaiterClicked():void
  {
    let tableId = this.cookieService.get("tableId");

    if (tableId == ""|| tableId == null|| tableId == undefined ) {
      console.log("tableId is empty");
      return;
    }

    this.callWaiterService.postCallWaiter(tableId).subscribe(()=>{
        this.waiterCalled=true;
    });

    this._snackBar.open('Waiter has been called', '', {duration: 2000});
  }

  onBtnBackToTopClicked(event: MouseEvent)
  {
    this.scroll.scrollToPosition([0,0]);
  }
}
