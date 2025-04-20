import { Component } from '@angular/core';
import { PublicLayoutComponent } from './routes/public/public-layout/public-layout.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {

  
}
