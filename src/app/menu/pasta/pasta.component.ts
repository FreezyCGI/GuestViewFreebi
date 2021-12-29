import { Component, OnInit } from '@angular/core';
import { MenuItemServiceService } from '../../services/menu-item-service.service'
import { MenuItemModel } from '../../models/menu-item-model.model';
import { MenuItemCategoryService } from 'src/app/services/menu-item-category.service'; 

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.css']
})
export class PastaComponent implements OnInit {

  menuItemList: MenuItemModel[] = [];

  constructor(
    private menuItemService: MenuItemServiceService, 
    private menuItemCategoryService:MenuItemCategoryService) { }

  ngOnInit(): void {
    this.getMenuItems();
  }

  getMenuItems(): void
  {
    this.menuItemService.getAllMenuItemsByCategory("pasta")
      .subscribe(menuItems => { this.menuItemList = menuItems; });
  }

  getCategory(): void
  {
    this.cate.getAllMenuItemsByCategory("pasta")
      .subscribe(menuItems => { this.menuItemList = menuItems; });
  }

}
