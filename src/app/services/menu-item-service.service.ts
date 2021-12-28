import { Injectable } from '@angular/core';
import { MenuItemModel } from '../models/menu-item-model.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuItemServiceService
{

  constructor(private http: HttpClient) { }

  getAllMenuItems(): Observable<MenuItemModel[]>
  {
    return this.http.get<MenuItemModel[]>("http://localhost:3000/menuList");
  }
}
