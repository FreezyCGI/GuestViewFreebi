import { Component, OnInit } from '@angular/core';
import { MenuItemServiceService } from '../../services/menu-item-service.service'
import { MenuItemModel } from '../../models/menu-item-model.model';
import { MenuItemCategoryService } from 'src/app/services/menu-item-category.service'; 
import { MenuItemCategory } from 'src/app/models/menu-item-category.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  menuItemList: MenuItemModel[] = [];
  categoryInfo: MenuItemCategory = new MenuItemCategory;

  constructor(
    private menuItemService: MenuItemServiceService, 
    private menuItemCategoryService:MenuItemCategoryService) { }

  ngOnInit(): void {
    this.getMenuItems();
    this.getCategory();
  }

  getMenuItems(): void
  {
    this.menuItemService.getAllMenuItemsByCategory("pizza")
      .subscribe(menuItems => { this.menuItemList = menuItems; });
  }

  getCategory(): void
  {
    this.menuItemCategoryService.getCategory("pizza")
      .subscribe(categoryInfo => { this.categoryInfo = categoryInfo; });
  }

}
