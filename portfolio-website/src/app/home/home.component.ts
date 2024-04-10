import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NgFor } from '@angular/common';

import { CaseStudyComponent } from '../components/case-study/case-study.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { FooterComponent } from '../layout/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CaseStudyComponent, NavbarComponent, FooterComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  @ViewChild('pRef') pRef!: ElementRef;
  @ViewChild('linePRef') linePRef!: ElementRef;
  @ViewChild('heroRef') heroRef!: ElementRef;
  @ViewChild('lineDivRef') lineDivRef!: ElementRef;

  ngAfterViewInit() {
    this.updateLineHeight();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.updateLineHeight();
  }

  private updateLineHeight() {
    this.linePRef.nativeElement.style.height = `${this.pRef.nativeElement.offsetHeight+ 10}px`;
    this.lineDivRef.nativeElement.style.height = `${this.heroRef.nativeElement.offsetHeight + 10}px`;
  }

  caseStudies = [
    {
      logo: '../../assets/img/ur-logo.png',
      role: 'GRADUATION PROJECT',
      header: 'DEVELOPMENT OF A MOTION CONTROL SYSTEM AS PART OF AN EDUCATIONAL ROBOT PLATFORM',
      desc: 'As part of my bachelor of engineering degree in robot systems, I collaborated with Universal Robots on my graduation project.',
      buttonText: 'UNDER NDA',
      buttonLink: '#',
      image: '../../assets/img/ur-case-study.png',
      backgroundColor: [86, 160, 211]
    },
    {
      logo: '../../assets/img/er-logo.png',
      role: 'ENGINEERING INTERNSHIP',
      header: 'DEVELOPMENT OF TEST MONITORING TOOL',
      desc: 'As part of my bachelor of engineering degree in robot systems, I did an engineering internship at Enabled Robotics.',
      buttonText: 'UNDER NDA',
      buttonLink: '#',
      image: '../../assets/img/er-case-study.png',
      backgroundColor: [128, 88, 164]
    },
    {
      logo: '../../assets/img/sdu-logo.png',
      role: '4. SEMESTER PROJECT',
      header: 'THE INVERTED PENDULUM',
      desc: '...',
      buttonText: 'DETAILS',
      buttonLink: 'https://github.com/Andreasgdp/Inverted-Pendulum',
      image: '../../assets/vid/inverted-pendulum.mp4',
      backgroundColor: [150, 150, 150]
    },
    {
      logo: '../../assets/img/sdu-logo.png',
      role: '3. SEMESTER PROJECT',
      header: 'THE THROWING ROBOT',
      desc: '...',
      buttonText: 'DETAILS',
      buttonLink: 'https://github.com/Andreasgdp/robo-throw',
      image: '../../assets/vid/throw.mp4',
      backgroundColor: [150, 150, 150]
    },
    {
      logo: '../../assets/img/sdu-logo.png',
      role: '2. SEMESTER PROJECT',
      header: 'THE ROBOT GRIPPER',
      desc: '...',
      buttonText: 'DETAILS',
      buttonLink: 'https://github.com/Andreasgdp/Robot-hand-semester-2',
      image: '../../assets/vid/beer-gripper.mp4',
      backgroundColor: [150, 150, 150]
    },
    {
      logo: '../../assets/img/sdu-logo.png',
      role: '1. SEMESTER PROJECT',
      header: 'THE DRAWING ROBOT',
      desc: '...',
      buttonText: 'DETAILS',
      buttonLink: 'https://github.com/Andreasgdp/Drawing-robot-semester-1',
      image: '../../assets/vid/drawing-robot-timelapse.mp4',
      backgroundColor: [150, 150, 150]
    }
  ];
}


