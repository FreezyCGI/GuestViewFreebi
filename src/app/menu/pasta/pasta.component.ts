import { Component, OnInit } from '@angular/core';
import { MenuItemServiceService } from '../../services/menu-item-service.service'
import { MenuItemModel } from '../../models/menu-item-model.model';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.css']
})
export class PastaComponent implements OnInit {

  menuItemList: MenuItemModel[] = [];

  constructor(private menuItemService: MenuItemServiceService) { }

  ngOnInit(): void {
    this.getMenuItems();
  }

  getMenuItems(): void
  {
    this.menuItemService.getAllMenuItemsByCategory("pasta")
      .subscribe(menuItems => { this.menuItemList = menuItems; });
  }

}
