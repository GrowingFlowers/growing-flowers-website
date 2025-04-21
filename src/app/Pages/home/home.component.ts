import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, CarouselModule, RouterModule, GalleriaModule, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  // Fixes issue where the carousel splits into two rows and displays different images when autoplay is enabled
  host: { ngSkipHydration: 'true' },
})
export class HomeComponent {

  products = [
    {
      title: 'Vadhu Var Suchika',
      image: '../../../../assets/products/vadhu-var-suchika.jpg',
      description: `Find your perfect match with verified profiles and smart matchmaking. 
      Bridging tradition and trust for a secure matrimony experience.`,
      route: '/products/vadhu-var-suchika',
      badge: 'New',
    },
    {
      title: 'My Dream Property',
      image: '../../../../assets/products/mdp.png',
      description: `Browse trusted real estate listings across India with expert advice and legal support. 
      Your property journey starts here.`,
      route: '/products/my-dream-property',
      badge: 'Coming Soon',
    },
    // {
    //   title: 'Be VibeStar',
    //   image: '../../../../assets/products/be-vibestar.jpg',
    //   description: `Create, connect, and vibe with real followers. 
    //   A bold social platform with AI filters and smart privacy.`,
    //   route: '/products/be-vibestar',
    //   badge: 'Coming Soon',
    // },
  ];
  
  
  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    }
  ];
  
   
}