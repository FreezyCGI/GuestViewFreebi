import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuItemListComponent } from './menu-item-list/menu-item-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemComponent,
    MenuItemListComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
