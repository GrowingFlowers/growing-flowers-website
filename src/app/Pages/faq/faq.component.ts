import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import {AccordionModule} from 'primeng/accordion';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,AccordionModule,CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  activeIndexes: number[] = [];

  faqs = [
    {
      question: 'What industries does GROWINGFLOWERS SOFTWARE SOLUTIONS LLP serve?',
      answer:
        'GROWINGFLOWERS SOFTWARE SOLUTIONS LLP serves clients in a wide range of industries, including healthcare, finance, education, retail, and more. We have experience working with clients of all sizes, from small startups to large enterprises.'
    },
    {
      question: 'What are the benefits of working with GROWINGFLOWERS SOFTWARE SOLUTIONS LLP?',
      answer:
        'Working with GROWINGFLOWERS SOFTWARE SOLUTIONS LLP provides numerous benefits, including access to a team of experienced professionals, customized solutions tailored to your needs, and a commitment to delivering high-quality products and services that drive results.'
    },
    {
      question: 'What kind of software development does GROWINGFLOWERS SOFTWARE SOLUTIONS LLP specialize in?',
      answer:
        'GROWINGFLOWERS SOFTWARE SOLUTIONS LLP specializes in custom software development, web application development, mobile app development, and cloud-based solutions. We have experience working with a wide range of programming languages and technologies to deliver the best results for our clients.'
    }
  ];
  
}
