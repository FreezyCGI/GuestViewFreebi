import { Component, OnInit } from '@angular/core';
import { MenuItemServiceService } from '../../services/menu-item-service.service'
import { MenuItemModel } from '../../models/menu-item-model.model';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  menuItemList: MenuItemModel[] = [];

  constructor(private menuItemService: MenuItemServiceService) { }

  ngOnInit(): void {
    this.getMenuItems();
  }

  getMenuItems(): void
  {
    this.menuItemService.getAllMenuItems()
      .subscribe(menuItems => { this.menuItemList = menuItems; });
  }

}
