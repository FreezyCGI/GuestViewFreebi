import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuItemListComponent } from './menu-item-list/menu-item-list.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './menu/all/all.component';
import { TopSellersComponent } from './menu/top-sellers/top-sellers.component';
import { WeeklySpecialsComponent } from './menu/weekly-specials/weekly-specials.component';
import { PizzaComponent } from './menu/pizza/pizza.component';
import { PastaComponent } from './menu/pasta/pasta.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  { path: 'menuItemList', component:MenuItemListComponent },
  { path: 'myOrders', component:MyOrdersComponent },
  { path: 'reviews', component:ReviewsComponent },
  { path: 'All', component:AllComponent },
  { path: 'TopSellers', component:TopSellersComponent },
  { path: 'WeeklySpecials', component:WeeklySpecialsComponent },
  { path: 'Pizza', component:PizzaComponent },
  { path: 'Pasta', component:PastaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
