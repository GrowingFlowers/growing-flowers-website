import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  sidebarVisible = false;
  dropdownStates: { [key: string]: boolean } = {};
  activeSection: string = 'home';

  constructor(public router: Router, private scroll: ViewportScroller) { }

  items = [
    { label: 'Home', route: '/home' },
    {
      label: 'Company',
      section: 'about-us',
      subItems: [
        { label: 'About Us', route: '/company/about-us' },
        { label: 'Life At GFSS', route: '/company/life-at-gfss' },
      ]
    },
    {
      label: 'Products',
      section: 'our-products',
      subItems: [
        { label: 'Vadhu-Var-Suchika', route: '/products/vadhu-var-suchika' },
        { label: 'My Dream Property', route: '/products/my-dream-property' },
        { label: 'Be VibeStar', route: '/products/be-vibestar' }
      ]
    },
    { label: 'Services', route: '/services' },
    { label: 'Careers', section: 'careers' },
    { label: 'Contact Us', section: 'contact-us' }
  ];

  scrollToSection(section: string) {
    debugger;
    console.log('Section: ', section);
  
    if (this.router.url !== '/home') {
      this.router.navigate([section]);
    } else {
      const element = document.getElementById(section);
      if (element) {
        const headerOffset = 120; // Adjust this to match your sticky header height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
  
        this.activeSection = section;
      }
    }
  
    this.sidebarVisible = false;
  }
  

  // isItemActive(item: any): boolean {
  //   if (item.type === 'route') {
  //     return this.router.url.startsWith(item.route); // instead of exact match
  //   }
  //   if (item.subItems) {
  //     return item.subItems.some((sub: any) => this.router.url.startsWith(sub.route));
  //   }
  //   return this.activeSection === item.section;
  // }


  toggleDropdown(label: string, event: Event) {
    event.stopPropagation();
    this.dropdownStates[label] = !this.dropdownStates[label];
  }

  openDropdown(label: string) {
    this.dropdownStates[label] = true;
  }

  closeDropdown(label: string) {
    this.dropdownStates[label] = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sectionIds = ['about-us', 'our-products', 'services', 'careers', 'contact-us'];
    let sectionInView: string | null = null;

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          sectionInView = id;
          break;
        }
      }
    }

    if (sectionInView) {
      this.activeSection = sectionInView;
    } else if (window.scrollY < 100) {
      this.activeSection = 'home';
    } else {
      this.activeSection = '';
    }
  }
}

