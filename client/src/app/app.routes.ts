import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';



export const routes: Routes = [
  
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: HomeComponent },
      
    ]
  }
];

 /*
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { },
      // Lägg till fler admin-sidor här
    ]
  }
*/

