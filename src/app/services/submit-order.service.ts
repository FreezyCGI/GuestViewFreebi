import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Jwt } from '../models/jwt.model';
import { MenuItemModel } from '../models/menu-item-model.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SubmitOrderService
{

  constructor(private http: HttpClient,
    private configService: ConfigService,
    private cookieService: CookieService) { }

  submitOrder(itemList: MenuItemModel[]): Observable<Jwt>
  {
    let tableId = this.cookieService.get("tableId");
    if (tableId == null)
    {
      console.error("no table id in postReview");
    }

    let optimizedItemList = this.getOptimizedItemList(itemList);

    return this.http.post<Jwt>(this.configService.baseUrl + "/payOrder", { tableId: tableId, itemList: optimizedItemList }, this.configService.httpOptionsForJson);
  }

  //Optimize item List: just use itemId and count. Dismiss all other variables
  getOptimizedItemList(itemList:MenuItemModel[]):{ itemId: number, count: number }[]
  { 
    let itemListOptimized: { itemId: number, count: number }[] = [];

    itemList.forEach((item) =>
    {
      itemListOptimized.push({ itemId: item.itemid, count: item.count });
    });

    return itemListOptimized;
  }
}
