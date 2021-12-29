import { Component, OnInit } from '@angular/core';
import { MenuItemServiceService } from '../../services/menu-item-service.service'
import { MenuItemModel } from '../../models/menu-item-model.model';

@Component({
  selector: 'app-weekly-specials',
  templateUrl: './weekly-specials.component.html',
  styleUrls: ['./weekly-specials.component.css']
})
export class WeeklySpecialsComponent implements OnInit {

  menuItemList: MenuItemModel[] = [];

  constructor(private menuItemService: MenuItemServiceService) { }

  ngOnInit(): void {
    this.getMenuItems();
  }

  getMenuItems(): void
  {
    this.menuItemService.getAllMenuItemsByCategory("weekly specials")
      .subscribe(menuItems => { this.menuItemList = menuItems; });
  }

}
