import { Routes } from '@angular/router';

import { PublicLayoutComponent } from './routes/public/public-layout/public-layout.component';
import { HomeComponent } from './routes/public/home/home.component';
import { MovieDetailsComponent } from './routes/public/movie-details/movie-details.component';
import { SearchComponent } from './routes/public/search/search.component';




export const routes: Routes = [
  
    { path: '', 
        component: PublicLayoutComponent,
        children: [
            { path: '', component: HomeComponent},
            { path: 'movies/:slug', component: MovieDetailsComponent },
            { path: 'search', component: SearchComponent }
        ]
    }    
    

];

