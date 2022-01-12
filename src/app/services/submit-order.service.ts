import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SubmitOrderService
{

  constructor(private http: HttpClient,
    private configService: ConfigService,
    private cookieService: CookieService) { }

  submitOrder()
  {
    let tableId = this.cookieService.get("tableId");
    if (tableId == null)
    {
      console.error("no table id in postReview");
    }

    return this.http.post(this.configService.baseUrl + "/payOrder", {tableId: tableId}, this.configService.httpOptionsForJson);
  }
}
