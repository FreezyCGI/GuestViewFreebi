import { Component, OnInit, Input } from '@angular/core';
import { MenuItemModel } from '../models/menu-item-model.model';
import { ShoppingCartService } from '../services/shopping-cart.service';

const imagePaths: {title:string, path:string}[] = 
[
  {title: "Pizza Margherita", path: "Pizza_Margherita"},
  {title: "Marinara", path: "Pizza_Marinara"},
  {title: "PIZZA PUGLIESE", path: "Pizza_Pugliese"},
  {title: "PIZZA CAPRICCIOSA", path: "Pizza_Capricciosa"},
  {title: "Spaghetti Carbonara", path: "Spaghetti_Carbonara"},
  {title: "PIZZA PROSCIUTTO CRUDO E RUCOLA", path: "Pizza_Prosciutto_Crudo_e_Rucola"},
  {title: "Lasagne al Forno Classico", path: "Lasagne_al_Forno_Classico"},
  {title: "Bucatini all'Amatriciana", path: "Bucatini_Allamatriciana"},
  {title: "Spaghetti alle Vongole", path: "Spaghetti_alle_Vongole"},
  
];

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit
{
  @Input()
  menuItem: MenuItemModel = new MenuItemModel;

  imagePathName: string = "";
  imagePath: string = "";

  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void
  {
    let path = this.getPathFromTitle(this.menuItem.title);

    this.imagePathName = path;
    this.imagePath = "/assets/images/menuItemImages/" + this.imagePathName + ".jpg";
  }

  getPathFromTitle(title:string):string
  {
    for(let i = 0; i < imagePaths.length; i++)
    {
      if(imagePaths[i].title == title)
      {
        return imagePaths[i].path;
      }
    }

    return "";
  }

  onAddToShoppingCartClicked(): void
  {
    this.shoppingCartService.addToShoppingCart(this.menuItem);
    this.shoppingCartService.openShoppingCart();
  }

  firstLetterToUpper(data:string):string
  {
    data = data.toLowerCase();
    let words:string[] = data.split(' ');
    let newWords = '';

    words.forEach((word) => {
      let firstLetter:string = word[0];
      firstLetter = firstLetter.toUpperCase();
      word = firstLetter + word.substring(1, word.length);
      newWords += word + " ";
    })


    return newWords;
  }

}
