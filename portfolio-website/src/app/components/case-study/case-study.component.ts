import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.scss'
})
export class CaseStudyComponent {
  @Input() logo = "";
  @Input() role = "";
  @Input() header = "";
  @Input() desc = "";
  @Input() buttonText = "";
  @Input() image = "";
  @Input() backgroundColor: any[] = [];
}


