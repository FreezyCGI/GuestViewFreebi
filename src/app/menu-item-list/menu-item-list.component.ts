import { Component, OnInit } from '@angular/core';
import { MenuItemServiceService } from '../menu-item-service.service'
import { MenuItemModel } from '../models/menu-item-model.model';

@Component({
  selector: 'app-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.css']
})
export class MenuItemListComponent implements OnInit
{
  menuItemList: MenuItemModel[] = [];

  constructor(private menuItemService: MenuItemServiceService) { }

  ngOnInit(): void
  {
    this.getMenuItems();
  }

  getMenuItems(): void
  {
    this.menuItemService.getAllMenuItems()
      .subscribe(menuItems => { this.menuItemList = menuItems; });
  }

}
