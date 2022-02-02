import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CallWaiterService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  postCallWaiter(tableId: string){
    return this.http.post(this.configService.baseUrl + "/callWaiter", {tableid: tableId}, this.configService.httpOptionsForJson);
  }
}
