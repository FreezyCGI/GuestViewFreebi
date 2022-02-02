import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/review.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService
{
  constructor(private http: HttpClient, private configService: ConfigService) { }

  getAllReviews(): Observable<Review[]>
  {
    return this.http.get<Review[]>(this.configService.baseUrl + "/reviews");
  }

  postReview(review: Review)
  {
    return this.http.post<Review>(this.configService.baseUrl + "/review", review, this.configService.httpOptionsForJson);
  }

  postReviewMenuItem(review: Review){
    return this.http.post(this.configService.baseUrl + "/reviewMenuItem", review, this.configService.httpOptionsForJson);
  }

  getReviewMenuItem(itemId:number, orderId:string):Observable<{orderid:string, itemid:string}>
  {
    let params = new HttpParams().set("itemid", itemId).set("orderid", orderId);

    return this.http.get<{orderid:string, itemid:string}>(this.configService.baseUrl + "/reviewMenuItem", {params: params})
  }
}
