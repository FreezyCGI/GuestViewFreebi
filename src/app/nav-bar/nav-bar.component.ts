import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit
{
  links = [
    { link: '/home', iconName: 'home', name: 'Home' },
    { link: '/all', iconName: 'menu_book', name: 'Menu' },
    { link: '/myOrders', iconName: 'shopping_bag', name: 'My Orders' },
    { link: '/reviews', iconName: 'mode_edit', name: 'Reviews' }];
  activeLink = {};

  constructor(private router: Router) { }

  ngOnInit(): void
  {
    this.router.events.subscribe((val) =>
    {
      this.setLink();
    });
    this.setLink();
  }

  //Set Mat-tab-nav-bar to the right button in case of a site reload
  setLink(): void
  {
    this.links.forEach((link) =>
    {
      if (link.link == location.pathname)
      {
        this.activeLink = link;
      }
    });
  }

}
