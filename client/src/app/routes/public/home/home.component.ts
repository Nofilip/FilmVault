import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { HiddenSpotComponent } from "../../../components/hidden-spot/hidden-spot.component";
import { MovieGridComponent } from '../../../components/movie-grid/movie-grid.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HiddenSpotComponent, MovieGridComponent], 
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {

  headlines: string[] = [
    'Upptäck filmens magi!',
    'Streama dina favoritfilmer direkt!',
    'Nya filmer varje vecka!',
    'Gamla klassiker och nya favoriter!'
  ];

  currentHeadlineIndex = 0;
  currentHeadline = '';
  intervalId: any;

  spots = [
    { id: 1, title: 'Action', imageURL: 'https://placehold.co/400x300' },
    { id: 2, title: 'Komedi', imageURL: 'https://placehold.co/400x300' },
    { id: 3, title: 'Thriller', imageURL: 'https://placehold.co/400x300' }
  ];

  ngOnInit(): void {
    
    this.currentHeadline = this.headlines[this.currentHeadlineIndex];
    this.intervalId = setInterval(() => {
      this.currentHeadlineIndex = (this.currentHeadlineIndex + 1) % this.headlines.length;
      this.currentHeadline = this.headlines[this.currentHeadlineIndex];
    }, 5000);


  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
