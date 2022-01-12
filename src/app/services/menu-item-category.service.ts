import { Injectable } from '@angular/core';
import { MenuItemCategory } from '../models/menu-item-category.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MenuItemCategoryService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getAllCategories(): Observable<MenuItemCategory[]>
  {
    return this.http.get<MenuItemCategory[]>(this.configService.baseUrl + "/menuCategories");
  }

  getCategory(title:string): Observable<MenuItemCategory>
  {
    return this.http.get<MenuItemCategory>(this.configService.baseUrl + "/menuCategories/" + title);
  }
}
