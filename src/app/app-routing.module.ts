import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AllComponent } from './menu/all/all.component';
import { TopSellersComponent } from './menu/top-sellers/top-sellers.component';
import { WeeklySpecialsComponent } from './menu/weekly-specials/weekly-specials.component';
import { PizzaComponent } from './menu/pizza/pizza.component';
import { PastaComponent } from './menu/pasta/pasta.component';
import { LoginComponent } from './login/login.component';

const baseUrl:string = 'guestView';

const routes: Routes = [
  { path: '', redirectTo: 'menu/all', pathMatch: 'full' },
  { path: 'myOrders', component:MyOrdersComponent },
  { path: 'reviews', component:ReviewsComponent },
  { path: 'menu', redirectTo: 'menu/all', pathMatch: 'full' },
  { path: 'menu/all', component:AllComponent },
  { path: 'menu/topSellers', component:TopSellersComponent },
  { path: 'menu/weeklySpecials', component:WeeklySpecialsComponent },
  { path: 'menu/pizza', component:PizzaComponent },
  { path: 'menu/pasta', component:PastaComponent },
  { path: 'login/:id', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
