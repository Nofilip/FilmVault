import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
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

    ngOnInit() {
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
