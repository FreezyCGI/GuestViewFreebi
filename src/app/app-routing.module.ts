import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuItemListComponent } from './menu-item-list/menu-item-list.component';
import { ReviewsComponent } from './reviews/reviews.component'

const routes: Routes = [
  { path: '', redirectTo: '/menuItemList', pathMatch: 'full' },
  { path: 'menuItemList', component:MenuItemListComponent },
  { path: 'reviews', component:ReviewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
