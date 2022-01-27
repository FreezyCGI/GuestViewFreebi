import { Component, OnInit } from '@angular/core';
import { MenuItemServiceService } from '../../services/menu-item-service.service'
import { MenuItemModel } from '../../models/menu-item-model.model';

@Component({
  selector: 'app-top-sellers',
  templateUrl: './top-sellers.component.html',
  styleUrls: ['./top-sellers.component.css', '../menu-content.css']
})
export class TopSellersComponent implements OnInit {

  menuItemList: MenuItemModel[] = [];

  constructor(private menuItemService: MenuItemServiceService) { }

  ngOnInit(): void {
    this.getTopSellers();
  }

  getTopSellers(): void
  {
    this.menuItemService.getTopSellers()
      .subscribe(menuItems => { this.menuItemList = menuItems; });
  }

}
