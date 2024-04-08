import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.scss'
})
export class CaseStudyComponent {
  @Input() csLogo = "";
  @Input() csRole = "";
  @Input() csHeader = "";
  @Input() csDesc = "";
  @Input() csBtnText = "";
  @Input() csImg = "";
  @Input() csBgColor: any[] = [];
}


