import { Component, OnInit, HostListener } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit
{
  title = 'GuestViewFreebi';
  shoppingCartActive: boolean = true;

  constructor(private shoppingCartService:ShoppingCartService,
    private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void
  {

  }

  onBtnShoppingCartClickedEvent(event:MouseEvent)
  {
    this.shoppingCartActive = true;
  }

  openBottomSheet(): void {
    this._bottomSheet.open(ShoppingCartComponent);
  }
}
