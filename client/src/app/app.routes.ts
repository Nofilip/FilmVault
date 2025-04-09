import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';



export const routes: Routes = [
  
    { path: '', component: HomeComponent },

    /*
      { path: 'details', component: DetailsComponent },
  { path: 'search', component: SearchResultsComponent },
   */
  
];

 /*
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { },
      // Lägg till fler admin-sidor här
    ]
  }
*/

