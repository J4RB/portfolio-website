import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = true;

  isDarkMode() {
    return this.darkMode;
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    // document.body.classList.toggle('dark', this.darkMode);
    document.body.setAttribute('theme', this.darkMode ? 'dark' : 'light');
  }
}