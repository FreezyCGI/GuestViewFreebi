import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from 'src/app/models/link.model';

@Component({
  selector: 'app-nav-bar-menu',
  templateUrl: './nav-bar-menu.component.html',
  styleUrls: ['./nav-bar-menu.component.css']
})
export class NavBarMenuComponent implements OnInit {
  
  links:Link[] = [
    { link: '/menu/all', iconName: '', name: 'all' },
    { link: '/menu/topSellers', iconName: '', name: 'top sellers' },
    { link: '/menu/weeklySpecials', iconName: '', name: 'weekly specials' },
    { link: '/menu/pizza', iconName: 'mode_edit', name: 'pizza' },
    { link: '/menu/pasta', iconName: 'mode_edit', name: 'pasta' }];
  activeLink:Link = new Link;

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
    this.links.forEach((link:Link) =>
    { 
      if ("/" + link.link.split("/")[2] == "/" + location.pathname.split("/")[2])
      {     
        this.activeLink = link;
      }
    });
  }

}
