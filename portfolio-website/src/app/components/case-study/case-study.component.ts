import { Component, Input } from '@angular/core';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [NgIf, NgStyle],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.scss'
})
export class CaseStudyComponent {
  @Input() logo = "";
  @Input() role = "";
  @Input() header = "";
  @Input() desc = "";
  @Input() buttonText = "";
  @Input() buttonLink = "";
  @Input() image = "";
  @Input() backgroundColor: any[] = [];
  @Input() textColor: any[] = [];

  caseStudyType!: string;

  ngOnInit() {
    this.determineCaseStudyType();
  }

  determineCaseStudyType() {
    const extension = this.image.split('.').pop();
    this.caseStudyType = (extension === 'mp4' || extension === 'webm' || extension === 'ogg') ? 'video' : 'image';
  }
}


