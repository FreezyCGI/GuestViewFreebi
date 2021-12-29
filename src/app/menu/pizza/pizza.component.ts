import { Component, OnInit } from '@angular/core';
import { MenuItemServiceService } from '../../services/menu-item-service.service'
import { MenuItemModel } from '../../models/menu-item-model.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  menuItemList: MenuItemModel[] = [];

  constructor(private menuItemService: MenuItemServiceService) { }

  ngOnInit(): void {
    this.getMenuItems();
  }

  getMenuItems(): void
  {
    this.menuItemService.getAllMenuItemsByCategory("pizza")
      .subscribe(menuItems => { this.menuItemList = menuItems; });
  }

}
