import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuItemListComponent } from './menu-item-list/menu-item-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './menu/all/all.component';
import { TopSellersComponent } from './menu/top-sellers/top-sellers.component';
import { WeeklySpecialsComponent } from './menu/weekly-specials/weekly-specials.component';
import { PizzaComponent } from './menu/pizza/pizza.component';
import { PastaComponent } from './menu/pasta/pasta.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NavBarMenuComponent } from './menu/nav-bar-menu/nav-bar-menu.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    MenuItemListComponent,
    ShoppingCartComponent,
    NavBarComponent,
    ReviewsComponent,
    HomeComponent,
    AllComponent,
    TopSellersComponent,
    WeeklySpecialsComponent,
    PizzaComponent,
    PastaComponent,
    MyOrdersComponent,
    NavBarMenuComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
