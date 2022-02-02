import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { elementAt } from 'rxjs';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit
{
  title = 'GuestViewFreebi';

  constructor(private shoppingCartService: ShoppingCartService,
    private scroll: ViewportScroller, private _snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  openShoppingCart(): void
  {
    this.shoppingCartService.openShoppingCart();
  }

  onBtnCallWaiterClicked():void
  {
    this._snackBar.open('Waiter has been called', '', {duration: 2000});

    //ToDo: implement methode for the button - should porbably change color of nav and button should say waiter is called
  }

  onBtnBackToTopClicked(event: MouseEvent)
  {
    this.scroll.scrollToPosition([0,0]);
  }
}
