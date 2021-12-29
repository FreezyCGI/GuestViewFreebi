import { Component, OnInit } from '@angular/core';
import { MenuItemServiceService } from '../../services/menu-item-service.service'
import { MenuItemModel } from '../../models/menu-item-model.model';
import { MenuItemCategoryService } from 'src/app/services/menu-item-category.service'; 
import { MenuItemCategory } from 'src/app/models/menu-item-category.model';

@Component({
  selector: 'app-weekly-specials',
  templateUrl: './weekly-specials.component.html',
  styleUrls: ['./weekly-specials.component.css']
})
export class WeeklySpecialsComponent implements OnInit {

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
    this.menuItemService.getAllMenuItemsByCategory("weekly specials")
      .subscribe(menuItems => { this.menuItemList = menuItems; });
  }

  getCategory(): void
  {
    this.menuItemCategoryService.getCategory("weekly specials")
      .subscribe(categoryInfo => { this.categoryInfo = categoryInfo; });
  }

}
