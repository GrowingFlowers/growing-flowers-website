import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      icon: 'pi pi-sitemap',  // or 'pi pi-sitemap' as alternate 'pi pi-briefcase'
      title: 'Product Engineering',
      description: 'From idea to launch, we engineer products that are innovative, scalable, and user-centric.'
    },
    {
      icon: 'pi pi-desktop',
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to solve your unique business challenges efficiently.'
    },
    {
      icon: 'pi pi-mobile',
      title: 'Mobile App Development',
      description: 'We create fast, user-friendly Android & iOS mobile apps that cater to your business needs.'
    },
    {
      icon: 'pi pi-cloud',
      title: 'Cloud Solutions',
      description: 'Deploy and manage your apps in the cloud with ease, ensuring availability, scalability, and security.'
    },    
    {
      icon: 'pi pi-spin pi-cog',  // or 'pi pi-sync' as alternate 'pi pi-sliders-h'
      title: 'DevOps',
      description: 'Streamline development and operations with CI/CD, automation, and infrastructure as code.'
    },
    {
      icon: 'pi pi-code',
      title: 'Web Development',
      description: 'We build robust, scalable, and high-performance web applications using the latest technologies.'
    },
  ];

}


// services = [
//   {
//     icon: 'pi pi-desktop',
//     title: 'Web Design',
//     description: 'We design modern, responsive, and attractive web layouts that enhance user experience and engagement.'
//   },
//   {
//     icon: 'pi pi-code',
//     title: 'Web Development',
//     description: 'We build robust, scalable, and high-performance web applications using the latest technologies.'
//   },
//   {
//     icon: 'pi pi-cloud',
//     title: 'Cloud Solutions',
//     description: 'Deploy and manage your apps in the cloud with ease, ensuring availability, scalability, and security.'
//   },
//   {
//     icon: 'pi pi-mobile',
//     title: 'Mobile App Development',
//     description: 'We create fast, user-friendly Android & iOS mobile apps that cater to your business needs.'
//   },
//   {
//     icon: 'pi pi-chart-line',
//     title: 'Digital Marketing',
//     description: 'Grow your brand online through SEO, social media, and targeted digital advertising strategies.'
//   },
//   {
//     icon: 'pi pi-cog',
//     title: 'Custom Software Development',
//     description: 'Tailored software solutions built to solve your unique business challenges efficiently.'
//   }
// ];