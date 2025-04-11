import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-grid',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './movie-grid.component.html',
})
export class MovieGridComponent implements OnInit {

  faHeart = faHeart;

  private http = inject(HttpClient);

  films: any[] = [];

  ngOnInit(): void {
    this.http.get<any[]>("/api/films")
    .subscribe(data => this.films = data);
  }
  
  
  }


