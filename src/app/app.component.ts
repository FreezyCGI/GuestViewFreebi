import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GuestViewFreebi';
  shoppingCartActive:boolean = false;


  @HostListener('document:click', ['$event']) onDocumentClick(event:MouseEvent) {
    this.shoppingCartActive = false;
    event.stopPropagation();
  }

  onBtnShoppingCartClickedEvent(event:MouseEvent)
  {
    this.shoppingCartActive = true;
    event.stopPropagation();
  }
}


