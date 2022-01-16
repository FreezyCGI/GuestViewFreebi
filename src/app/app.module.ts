import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
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
import { ShoppingCartItemComponent } from './shopping-cart/shopping-cart-item/shopping-cart-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginComponent } from './login/login.component'; 
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
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
    MainComponent,
    ShoppingCartItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule, 
    MatBottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
