import { Routes } from '@angular/router';

import { PublicLayoutComponent } from './routes/public/public-layout/public-layout.component';
import { HomeComponent } from './routes/public/home/home.component';
import { MovieDetailsComponent } from './routes/public/movie-details/movie-details.component';
import { SearchComponent } from './routes/public/search/search.component';

import { AdminLayoutComponent } from './routes/admin/admin-layout/admin-layout.component';

import { NewComponent } from './routes/admin/new/new.component';
import { DashboardComponent } from './routes/admin/dashboard/dashboard.component';




export const routes: Routes = [
  
    { path: '', 
        component: PublicLayoutComponent,
        children: [
            { path: '', component: HomeComponent},
            { path: 'movies/:slug', component: MovieDetailsComponent },
            { path: 'search', component: SearchComponent }
        ]
    }, 
    { path: 'admin/films',
        component: AdminLayoutComponent,
        children: [
            { path: '', component: DashboardComponent},
            { path: 'new', component: NewComponent},
        ]
        

    }   
    

];

