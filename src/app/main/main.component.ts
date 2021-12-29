import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit
{

  title = 'GuestViewFreebi';
  shoppingCartActive: boolean = false;

  @HostListener('document:click', ['$event']) onDocumentClick(event:MouseEvent) {
    this.shoppingCartActive = false;
    event.stopPropagation();
  }

  constructor() { }

  ngOnInit(): void
  {
  }

  onBtnShoppingCartClickedEvent(event:MouseEvent)
  {
    this.shoppingCartActive = true;
    event.stopPropagation();
  }

}
