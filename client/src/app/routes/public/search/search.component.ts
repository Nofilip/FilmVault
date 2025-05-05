import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { films } from '../../../../types/movie';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-search',
  imports: [CommonModule, RouterLink],
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  private route = inject(ActivatedRoute);

  private http = inject (HttpClient);

  results: films[] = [];
  query: string = '';
  errorMessage: string | null = null;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['query'];
      this.errorMessage = null;
  
      if (this.query) {
        this.http.get<films[]>(`/api/films/search?query=${this.query}`)
          .subscribe({
            next: data => {
              this.results = data;
              this.errorMessage = null;
              
            },
            error: err => {
              this.errorMessage = 'Ett fel inträffade vid sökningen. Försök igen senare.';
              this.results = []; 
            }
          });
      }
    });
  }  
}
