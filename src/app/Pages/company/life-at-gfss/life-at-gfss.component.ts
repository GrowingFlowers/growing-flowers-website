import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-life-at-gfss',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,AccordionModule,CommonModule],
  templateUrl: './life-at-gfss.component.html',
  styleUrl: './life-at-gfss.component.css'
})
export class LifeAtGFSSComponent {

  photos = [
    { url: 'https://png.pngtree.com/thumb_back/fh260/background/20240418/pngtree-partnership-of-companies-collaboration-business-technology-internet-concept-image_15659993.jpg', alt: 'Photo 1' },
    { url: 'https://png.pngtree.com/thumb_back/fh260/background/20230717/pngtree-collaborative-endeavors-two-businessmen-shaking-hands-in-partnership-signing-agreements-and-image_3895658.jpg', alt: 'Photo 2' },
    { url: 'https://png.pngtree.com/thumb_back/fh260/background/20240418/pngtree-partnership-of-companies-collaboration-business-technology-internet-concept-image_15659993.jpg', alt: 'Photo 3' },
    { url: 'https://png.pngtree.com/thumb_back/fh260/background/20240418/pngtree-partnership-of-companies-collaboration-business-technology-internet-concept-image_15659993.jpg', alt: 'Photo 1' },
    { url: 'https://png.pngtree.com/thumb_back/fh260/background/20230717/pngtree-collaborative-endeavors-two-businessmen-shaking-hands-in-partnership-signing-agreements-and-image_3895658.jpg', alt: 'Photo 2' },
    { url: 'https://png.pngtree.com/thumb_back/fh260/background/20240418/pngtree-partnership-of-companies-collaboration-business-technology-internet-concept-image_15659993.jpg', alt: 'Photo 3' },
    { url: 'https://png.pngtree.com/thumb_back/fh260/background/20240418/pngtree-partnership-of-companies-collaboration-business-technology-internet-concept-image_15659993.jpg', alt: 'Photo 1' },
    { url: 'https://png.pngtree.com/thumb_back/fh260/background/20230717/pngtree-collaborative-endeavors-two-businessmen-shaking-hands-in-partnership-signing-agreements-and-image_3895658.jpg', alt: 'Photo 2' },
    { url: 'https://png.pngtree.com/thumb_back/fh260/background/20240418/pngtree-partnership-of-companies-collaboration-business-technology-internet-concept-image_15659993.jpg', alt: 'Photo 3' }
  ];
   
  mainAccordionActive: number[] = [0]; // always open
   

}
