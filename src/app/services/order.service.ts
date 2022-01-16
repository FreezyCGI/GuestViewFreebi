import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItemModel } from '../models/menu-item-model.model';
import { Order } from '../models/order.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getAllOrders(tableId: string): Observable<Order[]>
  {
    let params = new HttpParams().set("tableId", tableId)

    return this.http.get<Order[]>(this.configService.baseUrl + "/orders", {params: params});
  }
}
