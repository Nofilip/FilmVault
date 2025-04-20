import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './new.component.html',
})
export class NewComponent {

  filmForm!: FormGroup;

  private http = inject(HttpClient)
  private router = inject(Router)

    ngOnInit() {

        this.filmForm = new FormGroup({
        title: new FormControl(''),
        id: new FormControl(''),
        description: new FormControl(''),
        genre: new FormControl(''),
        director: new FormControl(''),
        price: new FormControl(''),
        slug: new FormControl(''),
        imageUrl: new FormControl(''),
        eidr: new FormControl(''),
        
      });
    }

    onSubmit() {
      const film = this.filmForm.value;

      this.http.post("/api/films", film)
      .subscribe({
        next: (response) => {
          console.log("film created");
          this.router.navigate(['/admin/films'], { queryParams: { added: 'true' } });
        },
        error: (error) => {
          console.log('error submitting task:', error);
        }      
      });
    }

        
  }


