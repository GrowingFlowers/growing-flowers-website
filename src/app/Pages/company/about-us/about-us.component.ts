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
      name: 'Alice Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with a passion for innovation and user experience.Visionary leader with a passion for innovation and user experience.Visionary leader with a passion for innovation and user experience.Visionary leader with a passion for innovation and user experience.Visionary leader with a passion for innovation and user experience.Visionary leader with a passion for innovation and user experience.',
      photo: 'https://i.pravatar.cc/150?img=32',
      mail: 'alice@gmail.com'
    },
    {
      name: 'Brian Lee',
      role: 'Lead Developer',
      bio: 'Frontend expert who turns ideas into smooth digital experiences.Frontend expert who turns ideas into smooth digital experiences.Frontend expert who turns ideas into smooth digital experiences.Frontend expert who turns ideas into smooth digital experiences.Frontend expert who turns ideas into smooth digital experiences.Frontend expert who turns ideas into smooth digital experiences.Frontend expert who turns ideas into smooth digital experiences.',
      photo: 'https://i.pravatar.cc/150?img=12',
      mail: 'brian@gmail.com'
    },
    {
      name: 'Sophie Chen',
      role: 'Product Manager',
      bio: 'Driven to build intuitive products that solve real-world problems.Driven to build intuitive products that solve real-world problems.Driven to build intuitive products that solve real-world problems.Driven to build intuitive products that solve real-world problems.Driven to build intuitive products that solve real-world problems.Driven to build intuitive products that solve real-world problems.',
      photo: 'https://i.pravatar.cc/150?img=24',
      mail: 'sophie@gmail.com'
    },
    {
      name: 'David Kumar',
      role: 'UI/UX Designer',
      bio: 'Designs beautiful and functional user interfaces with precision.Designs beautiful and functional user interfaces with precision.Designs beautiful and functional user interfaces with precision.Designs beautiful and functional user interfaces with precision.Designs beautiful and functional user interfaces with precision.Designs beautiful and functional user interfaces with precision.',
      photo: 'https://i.pravatar.cc/150?img=12',
      mail: 'david@gmail.com'
    }
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
    }
  ];

  openProfileDialog(member: any) {
    this.selectedMember = member;
    this.displayProfileDialog = true;
  }


}


