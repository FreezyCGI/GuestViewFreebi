import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/review.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReviewService
{
  constructor(private http: HttpClient) { }

  getAllReviews(): Observable<Review[]>
  {
    return this.http.get<Review[]>("http://localhost:3000/reviews");
  }

  postReview(review: Review)
  {
    return this.http.post<Review>("http://localhost:3000/review", review, httpOptions);
  }
}
