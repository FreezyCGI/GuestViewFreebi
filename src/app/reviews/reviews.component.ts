import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review.model';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})

export class ReviewsComponent implements OnInit
{
  reviewList: Review[] = [];
  newRating:number = 1;

  constructor(private reviewService: ReviewService)
  {

  }

  ngOnInit(): void
  {
    this.reviewService.getAllReviews().subscribe((reviewArr) =>
    {
      this.reviewList = reviewArr;
    });
  }

  submit(desc: string): void
  {
    if (desc.trim() == "")
      {
        alert("Description must not be empty");
        return;   
      }

    let review: Review = new Review();

    try
    {
      review.description = desc;
      review.stars = this.newRating;
      review.createdAt = new Date();

      this.reviewService.postReview(review).subscribe(() => window.location.reload());  
    }
    catch (ex)
    {
      console.log(ex);
    }
  }

  onRateReview(rating:number):void{
    this.newRating = rating;
  }

  //Pfusch 
  //Convert numbers to an array. 
  //Example: input: 10
  //         output: array[10] 
  //needed for *ngFor loop of star-images
  starsToArr(stars: number): number[]
  {
    let starArr: number[] = [];

    for (let i = 0; i < stars; i++)
    {
      starArr.push(0);
    }
    return starArr;
  }

}
