import { Injectable } from '@angular/core';
import { MenuItemModel } from '../models/menu-item-model.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MenuItemServiceService
{

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getAllMenuItems(): Observable<MenuItemModel[]>
  {
    return this.http.get<MenuItemModel[]>(this.configService.baseUrl + "/menuList");
  }

  getAllMenuItemsByCategory(title:string): Observable<MenuItemModel[]>
  {
    return this.http.get<MenuItemModel[]>(this.configService.baseUrl + "/menuList/" + title);
  }

  getTopSellers(): Observable<MenuItemModel[]>
  {
    return this.http.get<MenuItemModel[]>(this.configService.baseUrl + "/topSellers");
  }
}
