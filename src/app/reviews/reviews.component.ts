import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})

export class ReviewsComponent implements OnInit {

  reviewList:Review[] = [];

  constructor() { 

  }

  ngOnInit(): void {
    this.reviewList = [
      {description:"desc1", reviewId:1, createdAt:new Date(), stars:2},
      {description:"desc2", reviewId:2, createdAt:new Date(), stars:3}]
  }

  //Pfusch 
  //Convert numbers to an array. 
  //Example: input: 10
  //         output: array[10] 
  //needed for *ngFor loop of star-images
  starsToArr(stars:number):number[]
  {
    let starArr:number[] = [];

    for(let i = 0; i < stars; i++)
    {
      starArr.push(0);
    }
    return starArr;
  }

}
