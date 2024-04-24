import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private themeService: ThemeService) {}

  navbarActive = false;

  toggleNav() {
    this.navbarActive = !this.navbarActive;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
} 
