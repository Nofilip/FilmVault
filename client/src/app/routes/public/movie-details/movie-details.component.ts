import { HttpClient } from '@angular/common/http';
import { Component, inject, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { films } from '../../../../types/movie';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { CommonModule } from '@angular/common';
import { RelatedFilmsComponent } from "../../../components/related-films/related-films.component";

@Component({
  selector: 'app-movie-details',
  imports: [FontAwesomeModule, CommonModule, RelatedFilmsComponent],
  templateUrl: './movie-details.component.html',
})
export class MovieDetailsComponent {


  faHeart = faHeart;

  private http = inject(HttpClient)

  private route = inject(ActivatedRoute);

  film!: films;

  genre!: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { 
      const slug = params.get('slug');
      if (slug) {
        this.http.get<films>(`/api/films/${slug}`)
          .subscribe(data => {
            this.film = data;
            this.genre = data.genre;

            window.scrollTo({ top: 0, behavior: 'smooth' });
          });
      }
    });
  }
    

}
