import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.css']
})
export class MenuItemListComponent implements OnInit {

  menuItemList = [1,2,3,4];

  constructor() { }

  ngOnInit(): void {
  }

}
