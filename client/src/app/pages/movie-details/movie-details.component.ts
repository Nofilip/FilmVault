import { HttpClient } from '@angular/common/http';
import { Component, inject, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { films } from '../../../types/movie';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './movie-details.component.html',
})
export class MovieDetailsComponent {

  faHeart = faHeart;

  private http = inject(HttpClient)

  private route = inject(ActivatedRoute);

  film!: films;

  ngOnInit(): void {

    const slug = this.route.snapshot.paramMap.get('slug');
    
    this.http.get<films>(`/api/films/${slug}`)
    .subscribe(data => this.film = data);

  }
    

}
