import { Injectable } from '@angular/core';
import { MenuItemCategory } from '../models/menu-item-category.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuItemCategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<MenuItemCategory[]>
  {
    return this.http.get<MenuItemCategory[]>("http://localhost:3000/menuCategories");
  }

  getCategory(title:string): Observable<MenuItemCategory>
  {
    return this.http.get<MenuItemCategory>("http://localhost:3000/menuCategories/" + title);
  }
}
