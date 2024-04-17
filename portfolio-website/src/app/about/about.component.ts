import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @ViewChild('aboutText', { static: false }) aboutText!: ElementRef;
  @ViewChild('lineNums', { static: false }) lineNums!: ElementRef;

  lineNumbers: number[] = [];

  ngOnInit(): void {
    this.lineNumbers = this.createRange(10, 99);
  }

  ngAfterViewInit(): void {
    this.adjustLineNumsHeight();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.adjustLineNumsHeight();
  }

  adjustLineNumsHeight(): void {
    this.lineNums.nativeElement.style.height = this.aboutText.nativeElement.offsetHeight + 'px';
  }

  createRange(m: number, n: number): number[] {
    return Array.from({length: n - m + 1}, (_, i) => m + i);
  }
}
