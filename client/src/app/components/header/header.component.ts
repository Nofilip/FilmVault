import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faBasketShopping,faBars } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  faBasketShopping = faBasketShopping;
  faHeart = faHeart;
  faBars = faBars;

  isMenuOpen: boolean = false;

}
