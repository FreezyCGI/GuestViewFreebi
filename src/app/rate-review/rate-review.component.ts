import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rate-review',
  templateUrl: './rate-review.component.html',
  styleUrls: ['./rate-review.component.css']
})
export class RateReviewComponent implements OnInit {
  
  @Output() ratingEvent = new EventEmitter<number>();
  activeStars: boolean[] = new Array(5);

  constructor() { }

  ngOnInit(): void {
    this.deactivateAllStars();
  }

  onStarClicked(index: number): void {

    this.deactivateAllStars();

    for (let i = 0; i < index + 1; i++) {
      this.activeStars[i] = true;
    }

    this.ratingEvent.emit(index + 1);
  }

  deactivateAllStars(): void {
    for (let i = 0; i < this.activeStars.length; i++) {
      this.activeStars[i] = false;
    }
    this.activeStars[0] = true;
  }

}
