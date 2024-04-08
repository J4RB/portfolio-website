import { Component } from '@angular/core';
import { CaseStudyComponent } from '../components/case-study/case-study.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { FooterComponent } from '../layout/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CaseStudyComponent, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
}


