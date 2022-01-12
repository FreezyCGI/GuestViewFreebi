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

  submit(starsString: string, desc: string): void
  {
    if (starsString.trim() == "" || desc.trim() == "")
      {
        alert("stars and description must not be empty");
        return;   
      }

    let review: Review = new Review();

    try
    {
      let stars = parseInt(starsString);

      if (stars > 5)
      {
        alert("max 5 stars");
        return;
      }
      if (stars < 0)
      {
        alert("min 1 star");
        return;
      }

      review.description = desc;
      review.stars = stars;
      review.createdAt = new Date();

      this.reviewService.postReview(review).subscribe(() => window.location.reload());  
    }
    catch (ex)
    {
      console.log(ex);
    }
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
