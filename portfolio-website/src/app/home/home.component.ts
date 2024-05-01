import { Component, ViewChild, ElementRef, HostListener, ViewChildren, QueryList } from '@angular/core';
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

  caseStudies = [
    {
      logo: '../../assets/img/ur-logo.png',
      role: 'GRADUATION PROJECT',
      header: 'DEVELOPMENT OF A MOTION CONTROL SYSTEM AS PART OF AN EDUCATIONAL ROBOT PLATFORM',
      desc: 'As part of my bachelor of engineering degree in robot systems, I collaborated with Universal Robots on my graduation project.',
      buttonText: 'UNDER NDA',
      buttonLink: '#',
      image: '../../assets/img/ur-case-study.png',
      backgroundColor: [86, 160, 211],
      textColor: [255, 255, 255],
      techUsed: ['C++', 'ROS2', 'MoveIt2', 'Kinematics', 'Trajectory Generation', 'Control System Design', 'Git', 'SCRUM']
    },
    {
      logo: '../../assets/img/er-logo.png',
      role: 'ENGINEERING INTERNSHIP',
      header: 'DEVELOPMENT OF TEST MONITORING TOOL',
      desc: 'As part of my bachelor of engineering degree in robot systems, I did an engineering internship at Enabled Robotics.',
      buttonText: 'UNDER NDA',
      buttonLink: '#',
      image: '../../assets/img/er-case-study.png',
      backgroundColor: [128, 88, 164],
      textColor: [255, 255, 255],
      techUsed: ['Python', 'ROS', 'Docker', 'Elasticsearch', 'Kibana', 'Git', 'SCRUM']
    },
    {
      logo: '../../assets/img/sdu-logo.png',
      role: '4. SEMESTER PROJECT',
      header: 'THE INVERTED PENDULUM',
      desc: 'We developed the control theory for an inverted pendulum, simulated the system using Simulink, and implemented it on a physical system, controlled by a Schneider PLC.',
      buttonText: 'DETAILS',
      buttonLink: 'https://github.com/Andreasgdp/Inverted-Pendulum',
      image: '../../assets/vid/inverted-pendulum.mp4',
      backgroundColor: [200, 200, 200],
      textColor: [0, 0, 0],
      techUsed: ['Control System Design', 'Kinematics', 'PLC Programming', 'Git', 'SCRUM']
    },
    {
      logo: '../../assets/img/sdu-logo.png',
      role: '3. SEMESTER PROJECT',
      header: 'THE THROWING ROBOT',
      desc: 'We developed a robot system capable of playing beer pong. The project includes identifying the ball and cup with the use of machine vision, picking the ball up, and throwing it in a way that it lands in the cup.',
      buttonText: 'DETAILS',
      buttonLink: 'https://github.com/Andreasgdp/robo-throw',
      image: '../../assets/vid/throw.mp4',
      backgroundColor: [200, 200, 200],
      textColor: [0, 0, 0],
      techUsed: ['C++', 'Python', 'Machine Vision', 'Kinematics', 'URSim', 'MySQL', 'Git', 'SCRUM']
    },
    {
      logo: '../../assets/img/sdu-logo.png',
      role: '2. SEMESTER PROJECT',
      header: 'THE ROBOT GRIPPER',
      desc: 'We developed a gripper for the UR5 robot manipulator. The project includes the development of the gripper mechanism, the design of the electronics, the control of the electronics from a Raspberry Pi, and a URCap to control the gripper from the teach pendant.',
      buttonText: 'DETAILS',
      buttonLink: 'https://github.com/Andreasgdp/Robot-hand-semester-2',
      image: '../../assets/vid/beer-gripper.mp4',
      backgroundColor: [200, 200, 200],
      textColor: [0, 0, 0],
      techUsed: ['C++', 'Java', 'URCaps', 'XML-RPC', '3D-modeling', 'Electrical Design', 'Git', 'SCRUM']
    },
    {
      logo: '../../assets/img/sdu-logo.png',
      role: '1. SEMESTER PROJECT',
      header: 'THE DRAWING ROBOT',
      desc: 'We developed the software to control a three-axis drawing robot. The project includes the preprocessing of the image, the development of the software to control the robot, optimization of the drawing algorithm, and implementation on a B&R PLC.',
      buttonText: 'DETAILS',
      buttonLink: 'https://github.com/Andreasgdp/Drawing-robot-semester-1',
      image: '../../assets/vid/drawing-robot-timelapse.mp4',
      backgroundColor: [200, 200, 200],
      textColor: [0, 0, 0],
      techUsed: ['Java', 'PLC Programming', 'Git', 'SCRUM']
    }
  ];

  ngAfterViewInit() {
    this.updateLineHeight();
    this.adjustCaseStudyWrapperHeight();
  }

  @HostListener('window:load')
  onWindowLoad() {
    this.adjustCaseStudyWrapperHeight();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.updateLineHeight();
    this.adjustCaseStudyWrapperHeight();
  }

  // Update the height of the vertical line in the div and p elements in hero section
  private updateLineHeight() {
    this.linePRef.nativeElement.style.height = `${this.pRef.nativeElement.offsetHeight+ 10}px`;
    this.lineDivRef.nativeElement.style.height = `${this.heroRef.nativeElement.offsetHeight + 10}px`;
  }

  // Make all case-study-wrapper elements the same height
  private adjustCaseStudyWrapperHeight() {
    // Set the height of the case-study-desc elements to fit-content
    const caseStudyDescElements = document.querySelectorAll('.case-study-desc');
    this.setElementStyle(caseStudyDescElements, 'height', 'fit-content');
    this.setElementStyle(caseStudyDescElements, 'maxHeight', 'fit-content');

    // Find the maximum height of the case-study-desc elements
    const maxHeight = this.getMaxHeight(caseStudyDescElements);
    console.log(maxHeight);

    // Set the height of all elements to the maximum height
    const elements = document.querySelectorAll('.case-study-wrapper, .case-study-desc, .case-study-img img, .case-study-img video');
    this.setElementStyle(elements, 'height', `${maxHeight}px`);
    this.setElementStyle(elements, 'maxHeight',  `${maxHeight}px`);
  }

  private getMaxHeight(elements: NodeListOf<Element>): number {
    let maxHeight = 0;
    elements.forEach((element: Element) => {
      const height = (element as HTMLElement).offsetHeight;
      maxHeight = height > maxHeight ? height : maxHeight;
    });
    return maxHeight;
  }

  private setElementStyle(elements: NodeListOf<Element>, property: string, value: string) {
    elements.forEach((element: Element) => {
      (element as HTMLElement).style.setProperty(property, value);
    });
  }
}
