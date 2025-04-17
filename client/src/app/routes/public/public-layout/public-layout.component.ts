import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './public-layout.component.html',
})
export class PublicLayoutComponent {

}
