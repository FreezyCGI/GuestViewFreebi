import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GuestViewFreebi';
  shoppingCartActive:boolean = false;


  @HostListener('document:click', ['$event']) onDocumentClick() {
    this.shoppingCartActive = false;
  }

  onBtnShoppingCartClickedEvent(event:MouseEvent)
  {
    this.shoppingCartActive = true;
    event.stopPropagation();
  }
}


