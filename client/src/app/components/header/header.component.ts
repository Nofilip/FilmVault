import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faBasketShopping,faBars } from "@fortawesome/free-solid-svg-icons";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  imports: [CommonModule, FontAwesomeModule, RouterModule, FormsModule ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  faBasketShopping = faBasketShopping;
  faHeart = faHeart;
  faBars = faBars;

  isMenuOpen: boolean = false;

  searchQuery: string = '';

  constructor (private router: Router) {}

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Navigating to search with query:', this.searchQuery); 
      this.router.navigate(['/search'], {
        queryParams: { query: this.searchQuery }
      });
    }
  }

}
