import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-life-at-gfss',
  standalone: true,
  imports: [AccordionModule, CommonModule],
  templateUrl: './life-at-gfss.component.html',
  styleUrl: './life-at-gfss.component.css'
})
export class LifeAtGFSSComponent {
  team_photos = [
    { url: 'life_at_gfss/Images/Team-Events/image-6.jpg', alt: 'Photo 2' },
    { url: 'life_at_gfss/Images/Team-Events/image-7.jpg', alt: 'Photo 3' },
    { url: 'life_at_gfss/Images/Team-Events/image-8.jpg', alt: 'Photo 1' },
  ];
  
  office_photos = [
    { url: 'life_at_gfss/Images/Office_vibes/image-3.jpg', alt: 'Photo 2' },
    { url: 'life_at_gfss/Images/Office_vibes/image-4.jpg', alt: 'Photo 3' },
    { url: 'life_at_gfss/Images/Office_vibes/image-5.jpg', alt: 'Photo 1' },
  ];
  
  sports_photos = [
    { url: 'life_at_gfss/Images/Sports/sport-diamonds- 2025-1.jpg', alt: 'Photo 2' },
    { url: 'life_at_gfss/Images/Sports/sport-diamonds-2025-2.jpg', alt: 'Photo 2' },
  ];
  
  mainAccordionActive: number[] = [0]; // always open
  


}
