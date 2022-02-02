import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallWaiterService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  postCallWaiter(tableId: string){
    return this.http.post(this.configService.baseUrl + "/callWaiter", {tableid: tableId}, this.configService.httpOptionsForJson);
  }

  getStatus(tableid: string): Observable<boolean>{
    let params = new HttpParams().set("tableid", tableid)
    return this.http.get<boolean>(this.configService.baseUrl + "/callWaiterStatus", { params: params} );
  }
}
