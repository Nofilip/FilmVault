import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { films } from '../../../types/movie';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-related-films',
  imports: [CommonModule, RouterLink],
  templateUrl: './related-films.component.html',
})
export class RelatedFilmsComponent implements OnInit {

  @Input() genre: string= '';
  @Input() currentFilmId: number = 0;
  film: films[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if (this.genre && this.currentFilmId) {
      this.fetchRelatedFilms(this.genre, this.currentFilmId);
    }
  }
  fetchRelatedFilms(genre: string, currentFilmId: number) {
    console.log(`Fetching related films for genre: ${genre} and excluding film id: ${currentFilmId}`);
    this.http.get<films[]>(`/api/films/genre/${genre}/${currentFilmId}`).subscribe({
      next: (data) => {
        this.film = data;  // Nu skickar servern redan de relaterade filmerna utan den aktuella filmen
      },
      error: (error) => {
        console.error('Error fetching related films:', error);
      }
    });
  }
}

