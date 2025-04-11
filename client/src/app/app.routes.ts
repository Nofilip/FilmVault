import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { MovieGridComponent } from './components/movie-grid/movie-grid.component';



export const routes: Routes = [
  
    { path: '', component: HomeComponent },
    { path: 'movies/:id', component: MovieGridComponent}

]

