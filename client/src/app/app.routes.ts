import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';



export const routes: Routes = [
  
    { path: '', component: HomeComponent },
    { path: 'movies/:slug', component: MovieDetailsComponent}

]

