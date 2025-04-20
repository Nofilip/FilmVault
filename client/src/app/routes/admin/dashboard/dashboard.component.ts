
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { films } from '../../../../types/movie';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    showSuccessMessage = false;

    private route = inject(ActivatedRoute);

    films: films [] = [];

    private http = inject(HttpClient);
  
    ngOnInit(): void {
    
      this.http.get<films[]>("/api/films").subscribe(data => {
        this.films = data;
      });
    
     
      this.route.queryParams.subscribe(params => {
        if (params['added'] === 'true') {
          this.showSuccessMessage = true;
    
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 5000);
        }
      });
    }
};
    



