import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';

  // Providern vi lade till precis (i app.config.ts) gör det möjligt för oss att
  // efterfråga HttpClient. Detta kallas för "dependency injection"
  // och är något vi kommer gå igenom under kursen. 
  constructor(private http: HttpClient) {

    // Precis som fetch() kan vi nu använda "http" för att göra 
    // anrop till backend.

    // Vi skickar ett GET-anrop till backend för att hämta
    // uppgifter.
    this.http.get('/api/tasks').subscribe(task => {
      // Skriv ut uppgifterna till konsolen i webbläsaren.
      console.log(task);
    });

  }
}
