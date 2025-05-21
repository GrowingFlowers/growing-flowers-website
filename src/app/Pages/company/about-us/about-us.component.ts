import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CardModule, CommonModule, RouterModule, ButtonModule, CarouselModule, DialogModule, AccordionModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
  // Fixes issue where the carousel splits into two rows and displays different images when autoplay is enabled
  host: { ngSkipHydration: 'true' },
})
export class AboutUsComponent {
  displayProfileDialog: boolean = false;
  selectedMember: any = null;

  team = [
    {
      name: 'Rupesh Shirude',
      role: 'CEO & Founder',
      bio: 'As the Founder and CEO of Growing Flowers Software Solutions, I lead a passionate team focused on building smart, reliable, and user-friendly software products that solve real-world problems. Our company develops and manages a range of digital platforms across key sectors including matrimony, real estate, education, and healthcare. I oversee all aspects of the business—from product strategy and development to team leadership and client relationships. My goal is to drive innovation, deliver value to our users, and help organizations grow through technology.',
      photo: '../../../../assets/Team-Lead/rupesh_shirude.jpg',
    },
    {
      name: 'Neha Shirude',
      role: 'Co-CEO & Co-Founder',
      bio: 'Frontend expert who turns ideas into smooth digital experiences.Frontend expert who turns ideas into smooth digital experiences.Frontend expert who turns ideas into smooth digital experiences.Frontend expert who turns ideas into smooth digital experiences.Frontend expert who turns ideas into smooth digital experiences.Frontend expert who turns ideas into smooth digital experiences.Frontend expert who turns ideas into smooth digital experiences.',
      photo: '../../../../assets/Team-Lead/Neha_Shirude.jpg',
    },
    {
      name: 'Ashwini Patil',
      role: 'HR Manager',
      bio: 'As an HR recruiter at Growing Flowers Software Solution with 4 years of experience, I specialize in talent acquisition, sourcing, and selecting candidates for diverse roles. I focus on understanding both the needs of the organization and the aspirations of the candidates, ensuring a perfect match. My expertise lies in streamlining recruitment processes and fostering strong professional relationships while delivering a seamless hiring experience.',
      photo: '../../../../assets/Team-Lead/ashwini_patil.jpg',
    },
    {
      name: 'Abhishek Joshi',
      role: 'Team Lead',
      bio: 'As a Team Leader, I lead the development of end-to-end solutions that are both robust and user-friendly, ensuring alignment with modern development standards. My expertise spans UI design, API integration, and backend logic, allowing me to guide teams across the entire development lifecycle. I foster a culture of clean, maintainable code, and actively encourage continuous improvement through hands-on problem solving, collaboration, and mentoring. I am committed to delivering high-quality solutions while empowering my team to grow and excel in their roles.',
      photo: '../../../../assets/Team-Lead/abhishek_joshi.jpg',
    },
    {
      name: 'Kshitija Gaikwad',
      role: 'Team Lead',
      bio: 'As a Senior Software Engineer with over 4 years of experience, I am passionate about creating seamless and high-performance web applications.Specializing in Angular, HTML, CSS, and Bootstrap, I build responsive solutions that enhance user experiences.In my role as a Scrum lead, I facilitate daily stand-ups and encourage collaboration across teams to drive efficient progress.Mentoring junior developers and fostering a culture of knowledge-sharing is something I find particularly rewarding.Constantly learning and adapting, I explore emerging technologies to improve both the user experience and project outcomes.',
      photo: '../../../../assets/Team-Lead/kshitija_gaikwad.jpg',
    },
    {
      name: 'Akansha khose',
      role: 'Database Team Lead',
      bio: 'I’m a Senior Software Engineer with  experience leading database teams. I have worked on building, improving, and maintaining large and complex database systems that support business needs. I’m skilled in writing efficient code, designing clean data structures, and making sure systems run fast and reliably. I enjoy working with others, solving tough technical problems, and helping my team grow and succeed',
      photo: '../../../../assets/Team-Lead/akansha_kose.jpg',
    },
    {
      name: 'Pradnya Patil',
      role: 'Senior Software Engineer',
      bio: 'Hi, I amPradnya Patil, a Senior Software Engineer with a strong focus on building scalable and user-centric software solutions. With experience in mobile development. I take pride in clean code, mentoring others , an driving innovation through technology. I am passionate about continuous growth, collaboration and delivering high-quality products.',
      photo: '../../../../assets/Team-Lead/pradnya_patil.jpg',
    },
    {
      name: 'Amruta Patil',
      role: 'Senior Software Engineer',
      bio: 'Hi, I am Amruta Patil, a Senior Software Engineer with a strong focus on building scalable and user-centric software solutions. With experience in mobile development. I take pride in clean code, mentoring others , an driving innovation through technology. I am passionate about continuous growth, collaboration and delivering high-quality products.',
      photo: '../../../../assets/Team-Lead/amruta_patil.jpg',
    },
    // {
    //   name: 'Rahul Mali',
    //   role: 'DevOps Engineer',
    //   bio: 'Passionate coder with a knack for solving complex problems and a love for clean code.',
    //   photo: '../../../../assets/Team-Lead/shubham_patil.jpg',
    // },
    {
      name: 'Jagruti Tatar',
      role: 'Software Developer',
      bio: 'I am a full-stack software developer with practical experience in developing and maintaining web applications using Angular and Java. I have contributed to projects that emphasize clean architecture, performance, and user-centric design. With a growing background in both front-end and back-end development, I strive to write maintainable, efficient code and follow industry best practices. I am dedicated to continuous learning and professional growth, and I aim to deliver high-quality, scalable solutions that align with user needs and business goals.',
      photo: '../../../../assets/Team-Lead/jagruti_tatar.jpg',
    },
    {
      name: 'Divyesh Gawad',
      role: 'Software Developer',
      bio: 'As a full-stack developer with a focus on Angular and Java, I build end-to-end solutions that are robust, user-friendly, and aligned with modern development standards. My experience spans UI design, API integration, and backend logic, allowing me to contribute across the entire development lifecycle. I’m committed to writing clean, maintainable code and continuously improving through hands-on problem solving and collaboration.',
      photo: '../../../../assets/Team-Lead/divyesh.png',
    },
    {
      name: 'Rushikesh Gaikwad',
      role: 'Software Developer',
      bio: 'I develop full-stack web applications using Angular for the frontend and Java for the backend, creating efficient and scalable systems that meet real-world demands. My approach combines technical precision with a deep understanding of user needs, ensuring each product is both functional and intuitive. I value teamwork, code quality, and continuous learning as the foundation of successful software delivery.',
      photo: '../../../../assets/Team-Lead/rushikesh_gaikwad.jpg',
    },

  ];

carouselResponsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '320px',
    numVisible: 1,
    numScroll: 1
  }
];

  openProfileDialog(member: any) {
    this.selectedMember = member;
    this.displayProfileDialog = true;
  }


}


